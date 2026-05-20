"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./config/env");
const logger_1 = require("./config/logger");
const startServer = async () => {
    try {
        const app = (0, app_1.createApp)();
        app.listen(env_1.env.PORT, () => {
            // Only show minimal startup info in development
            if (env_1.env.NODE_ENV === 'development') {
                console.log(`Server running on http://localhost:${env_1.env.PORT}${env_1.env.API_PREFIX}`);
            }
        });
    }
    catch (error) {
        logger_1.logger.error({ err: error }, 'Failed to start server');
        process.exit(1);
    }
};
// Handle graceful shutdown silently
process.on('SIGTERM', async () => {
    process.exit(0);
});
process.on('SIGINT', async () => {
    process.exit(0);
});
startServer();
//# sourceMappingURL=index.js.map