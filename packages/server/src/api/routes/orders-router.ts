import {
  createOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
  getOrderById,
} from './../controllers/orders-controller';
import { Router } from 'express';

export const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);
ordersRouter.get('/:id', getOrderById);
ordersRouter.post('/', createOrder);
ordersRouter.put('/', updateOrder);
ordersRouter.delete('/', deleteOrder);
