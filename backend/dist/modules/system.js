"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemRouter = void 0;
const express_1 = require("express");
exports.systemRouter = (0, express_1.Router)();
// ============================================
// System & Health Routes
// ============================================
/**
 * API root - welcome message
 */
exports.systemRouter.get('/', async (_req, res) => {
    res.json({
        message: 'Welcome to the API',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        documentation: '/api/docs', // TODO: Add API documentation
    });
});
/**
 * Basic health check - always returns OK
 */
exports.systemRouter.get('/health', async (_req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
});
/**
 * Readiness check
 */
exports.systemRouter.get('/health/ready', async (_req, res) => {
    res.json({
        status: 'ready',
        timestamp: new Date().toISOString(),
        checks: {
            database: 'TCB managed (frontend SDK)',
        },
    });
});
/**
 * Liveness check - verifies service is alive
 */
exports.systemRouter.get('/health/live', async (_req, res) => {
    res.json({
        status: 'alive',
        timestamp: new Date().toISOString(),
    });
});
/**
 * API version information
 */
exports.systemRouter.get('/version', async (_req, res) => {
    res.json({
        version: '1.0.0',
        apiVersion: 'v1',
        nodeVersion: process.version,
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString(),
    });
});
/**
 * Simple ping endpoint
 */
exports.systemRouter.get('/ping', async (_req, res) => {
    res.json({
        message: 'pong',
        timestamp: new Date().toISOString(),
    });
});
/**
 * System status with uptime and memory info
 */
exports.systemRouter.get('/status', async (_req, res) => {
    const memoryUsage = process.memoryUsage();
    res.json({
        status: 'operational',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        memory: {
            rss: `${Math.round(memoryUsage.rss / 1024 / 1024)}MB`,
            heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`,
            heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`,
            external: `${Math.round(memoryUsage.external / 1024 / 1024)}MB`,
        },
        process: {
            pid: process.pid,
            platform: process.platform,
            nodeVersion: process.version,
        },
    });
});
//# sourceMappingURL=system.js.map