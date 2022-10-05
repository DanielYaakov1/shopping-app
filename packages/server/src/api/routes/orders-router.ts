import {
  createOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
} from './../controllers/orders-controller';
import { Router } from 'express';
import { requireAuth } from '../../middleware/requireAuth';

export const ordersRouter = Router();

ordersRouter.get('/', requireAuth, getAllOrders);
ordersRouter.post('/', createOrder);
ordersRouter.put('/', updateOrder);
ordersRouter.delete('/', deleteOrder);
