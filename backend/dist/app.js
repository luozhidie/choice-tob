"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
require("express-async-errors");
const env_1 = require("./config/env");
const errorHandler_1 = require("./middleware/errorHandler");
const logger_1 = require("./middleware/logger");
const system_1 = require("./modules/system");
const auth_1 = require("./modules/auth");
const createApp = () => {
    const app = (0, express_1.default)();
    // HTTP request logging
    app.use(logger_1.httpLogger);
    app.use((0, cors_1.default)({
        origin: env_1.env.CORS_ORIGIN === '*' ? '*' : env_1.env.CORS_ORIGIN,
        credentials: env_1.env.CORS_ORIGIN !== '*',
    }));
    // Body parsing and compression
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, compression_1.default)());
    // API routes
    app.use(env_1.env.API_PREFIX, system_1.systemRouter);
    app.use(`${env_1.env.API_PREFIX}/auth`, auth_1.authRouter);
    // Error handling
    app.use(errorHandler_1.errorHandler);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map