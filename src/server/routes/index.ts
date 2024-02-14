import { Express } from 'express';
import shopRouter from './shopRoutes';

export const registerRoutes = (app: Express) => {
  app.use(shopRouter);
};
