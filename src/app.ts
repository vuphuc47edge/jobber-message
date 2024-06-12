import { config } from '@chat/config';
import { databaseConnection } from '@chat/database';
import { start } from '@chat/server';
import express, { Express } from 'express';

const initialize = (): void => {
  databaseConnection();
  config.cloudinaryConfig();

  const app: Express = express();
  start(app);
};

initialize();
