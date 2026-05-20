import pino from 'pino';
export declare const logger: pino.Logger<never, boolean>;
/**
 * Create a child logger with context
 * @param context - Context name for the logger (e.g., 'UserController', 'SystemController')
 * @returns Child logger instance with context
 */
export declare function createLogger(context: string): pino.Logger<never, boolean>;
//# sourceMappingURL=logger.d.ts.map