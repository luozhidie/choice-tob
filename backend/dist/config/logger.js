"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.createLogger = createLogger;
const pino_1 = __importDefault(require("pino"));
const isDevelopment = process.env.NODE_ENV === 'development';
exports.logger = (0, pino_1.default)({
    level: process.env.LOG_LEVEL || 'warn', // Changed from 'info' to 'warn' for silence on success
    transport: isDevelopment
        ? {
            target: 'pino-pretty',
            options: {
                colorize: true,
                translateTime: 'HH:MM:ss',
                ignore: 'pid,hostname',
                messageFormat: '{msg}',
            },
        }
        : undefined,
    timestamp: false, // Disable timestamp in production for cleaner logs
    serializers: {
        err: pino_1.default.stdSerializers.err,
    },
});
/**
 * Create a child logger with context
 * @param context - Context name for the logger (e.g., 'UserController', 'SystemController')
 * @returns Child logger instance with context
 */
function createLogger(context) {
    return exports.logger.child({ context });
}
//# sourceMappingURL=logger.js.map