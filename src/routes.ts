import { healthRoutes } from '@chat/routes/health';
import { messageRoutes } from '@chat/routes/message';
import { verifyGatewayRequest } from '@vuphuc47edge/jobber-shared';
import { Application } from 'express';

const BASE_PATH = '/api/v1/message';

export const appRoutes = (app: Application): void => {
  app.use('', healthRoutes());
  app.use(BASE_PATH, verifyGatewayRequest, messageRoutes());
};
