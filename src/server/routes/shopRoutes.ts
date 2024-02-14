import { Router } from 'express';
import { bookingHandler } from '../handlers/shopHandlers';

const shopRouter = Router();

shopRouter.get('/:shop/book', bookingHandler);
export default shopRouter;
