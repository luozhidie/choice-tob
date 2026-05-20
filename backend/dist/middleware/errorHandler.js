"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.AppError = void 0;
const zod_1 = require("zod");
const logger_1 = require("../config/logger");
const logger = (0, logger_1.createLogger)('ErrorHandler');
class AppError extends Error {
    statusCode;
    message;
    isOperational;
    constructor(statusCode, message, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
exports.AppError = AppError;
const errorHandler = (err, req, res, _next) => {
    // Zod validation errors
    if (err instanceof zod_1.ZodError) {
        logger.warn({
            method: req.method,
            url: req.url,
            errors: err.errors,
        }, 'Validation error');
        return res.status(400).json({
            status: 'error',
            message: 'Validation failed',
            errors: err.errors.map(e => ({
                field: e.path.join('.'),
                message: e.message,
            })),
        });
    }
    // Application errors
    if (err instanceof AppError) {
        logger.warn({
            method: req.method,
            url: req.url,
            statusCode: err.statusCode,
        }, err.message);
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    // Unknown errors
    logger.error({
        err,
        method: req.method,
        url: req.url,
    }, 'Unhandled error');
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map