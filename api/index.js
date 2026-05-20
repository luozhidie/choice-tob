const path = require('path');
const fs = require('fs');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', 'backend', '.env') });
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// Set production defaults
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || '3000';
process.env.API_PREFIX = process.env.API_PREFIX || '/api';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'luozhidie-secret-key-2026';
process.env.ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'luozhidie@live.cn';
process.env.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Lzd123456';
process.env.CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Import compiled backend app
const backendDistPath = path.join(__dirname, '..', 'backend', 'dist', 'src', 'app.js');

let app;
try {
  const mod = require(backendDistPath);
  app = mod.createApp();
} catch (err) {
  console.error('Failed to load backend from dist:', err.message);
  // Fallback: try src
  try {
    const mod = require(path.join(__dirname, '..', 'backend', 'src', 'app.js'));
    app = mod.createApp();
  } catch (err2) {
    console.error('Failed to load backend from src:', err2.message);
    throw err2;
  }
}

// Vercel serverless function handler
module.exports = async (req, res) => {
  // CORS headers
  const origin = req.headers.origin;
  const isAllowed = origin && (
    origin.includes('colour-choice.art') ||
    origin.includes('vercel.app') ||
    origin.includes('localhost')
  );
  
  if (isAllowed) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  // Pass to Express app
  return app(req, res);
};
