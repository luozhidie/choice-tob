import express, { Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import 'express-async-errors';
import { env } from './config/env';
import { errorHandler } from './middleware/errorHandler';
import { httpLogger } from './middleware/logger';
import { systemRouter } from './modules/system';
import { authRouter } from './modules/auth';

export const createApp = (): Application => {
  const app = express();

  // HTTP request logging
  app.use(httpLogger);

  app.use(
    cors({
      origin: env.CORS_ORIGIN === '*' ? '*' : env.CORS_ORIGIN,
      credentials: env.CORS_ORIGIN !== '*',
    })
  );

  // Body parsing and compression
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());

  // API routes
  app.use(env.API_PREFIX, systemRouter);
  app.use(`${env.API_PREFIX}/auth`, authRouter);

  // Error handling
  app.use(errorHandler);

  return app;
};
