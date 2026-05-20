#!/usr/bin/env bash
# ensure-cloudbase-env.sh
# Idempotent script to ensure CloudBase TCB environment credentials are available.
# Usage: bash ensure-cloudbase-env.sh [--project-dir <dir>] [--structure monorepo|single]

set -euo pipefail

PROJECT_DIR="."
STRUCTURE="auto"
AUTH_PROXY_HOST="tcb-env.auth-proxy.local"
REGION="ap-shanghai"

# Parse arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    --project-dir) PROJECT_DIR="$2"; shift 2 ;;
    --structure) STRUCTURE="$2"; shift 2 ;;
    --region) REGION="$2"; shift 2 ;;
    *) echo "Unknown arg: $1"; exit 1 ;;
  esac
done

cd "$PROJECT_DIR"

# --- Step 0: Check if .env.tcb already exists ---

if [ -f "/workspace/.env.tcb" ] && grep -q "CLOUDBASE_ENV_ID=" "/workspace/.env.tcb" 2>/dev/null; then
  echo "TCB environment already initialized (found /workspace/.env.tcb)"
  exit 0
fi

# --- Step 1: Detect project structure ---

if [ "$STRUCTURE" = "auto" ]; then
  if [ -d "frontend" ]; then
    STRUCTURE="monorepo"
  else
    STRUCTURE="single"
  fi
fi

echo "Project structure: $STRUCTURE"

# --- Step 2: Create TCB environment via auth-proxy ---

# Build sandbox domain from environment variables
# Format: 55221-{X_IDE_SPACE_KEY}.e2b.{X_IDE_PREVIEW_DOMAIN}
SPACE_KEY="${X_IDE_SPACE_KEY:-}"
PREVIEW_DOMAIN="${X_IDE_PREVIEW_DOMAIN:-}"
if [ -n "$SPACE_KEY" ] && [ -n "$PREVIEW_DOMAIN" ]; then
  SANDBOX_DOMAIN="55221-${SPACE_KEY}.e2b.${PREVIEW_DOMAIN}"
else
  SANDBOX_DOMAIN="${SANDBOX_DOMAIN:-localhost}"
fi

echo "Creating TCB environment for domain: $SANDBOX_DOMAIN ..."

RESPONSE=$(curl -sf -X POST \
  "http://${AUTH_PROXY_HOST}/create" \
  -H "Content-Type: application/json" \
  -d "{
    \"domain\": \"${SANDBOX_DOMAIN}\",
    \"region\": \"${REGION}\"
  }" 2>&1) || {
  echo "ERROR: Failed to reach auth-proxy at $AUTH_PROXY_HOST"
  echo "Response: $RESPONSE"
  exit 1
}

ENV_ID=$(echo "$RESPONSE" | jq -r '.envId // .data.envId // empty')
RESP_REGION=$(echo "$RESPONSE" | jq -r '.region // .data.region // "ap-shanghai"')
CREATED=$(echo "$RESPONSE" | jq -r '.created // .data.created // "unknown"')

if [ -z "$ENV_ID" ]; then
  echo "ERROR: Failed to obtain TCB environment"
  echo "$RESPONSE" | jq . 2>/dev/null || echo "$RESPONSE"
  exit 1
fi

if [ "$CREATED" = "true" ]; then
  echo "TCB environment created: $ENV_ID"
else
  echo "TCB environment already exists: $ENV_ID"
fi

# --- Step 3: Read credentials from .env.tcb (written by api-server) ---

if [ ! -f "/workspace/.env.tcb" ]; then
  echo "WARNING: /workspace/.env.tcb not found after creation"
fi

# Read publishable key from .env.tcb
PUBLISHABLE_KEY=""
if [ -f "/workspace/.env.tcb" ]; then
  PUBLISHABLE_KEY=$(grep "CLOUDBASE_PUBLISH_KEY=" /workspace/.env.tcb 2>/dev/null | cut -d= -f2- || true)
fi

# --- Step 4: Write frontend .env file ---

# Read OAUTH_RELAY_URL from .env.tcb (written by api-server)
OAUTH_RELAY_URL=""
if [ -f "/workspace/.env.tcb" ]; then
  OAUTH_RELAY_URL=$(grep "VITE_OAUTH_RELAY_URL=" /workspace/.env.tcb 2>/dev/null | cut -d= -f2- || true)
fi

ENV_BLOCK_FRONTEND="
# CloudBase Environment (auto-generated)
VITE_CLOUDBASE_ENV_ID=${ENV_ID}
VITE_CLOUDBASE_REGION=${RESP_REGION}
VITE_CLOUDBASE_PUBLISH_KEY=${PUBLISHABLE_KEY}
VITE_OAUTH_RELAY_URL=${OAUTH_RELAY_URL}"

if [ "$STRUCTURE" = "monorepo" ]; then
  echo "$ENV_BLOCK_FRONTEND" >> frontend/.env
  echo "Wrote credentials to frontend/.env"
else
  echo "$ENV_BLOCK_FRONTEND" >> .env
  echo "Wrote credentials to .env"
fi

# --- Step 5: Install frontend SDK ---

if [ "$STRUCTURE" = "monorepo" ]; then
  if [ -f "frontend/package.json" ]; then
    echo "Installing @cloudbase/js-sdk in frontend..."
    (cd frontend && npm install @cloudbase/js-sdk@3.3.2 --save)
  fi
else
  if [ -f "package.json" ]; then
    echo "Installing @cloudbase/js-sdk..."
    npm install @cloudbase/js-sdk@3.3.2 --save
  fi
fi

echo ""
echo "CloudBase Environment Setup Complete:"
echo "  ENV_ID:  ${ENV_ID}"
echo "  Region:  ${RESP_REGION}"
echo "  Publish Key: ${PUBLISHABLE_KEY:0:20}..."
echo ""
echo "No backend setup needed - OAuth is handled by TCB cloud function."
