import { Router } from 'express';
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
  getOrderById,
} from './../controllers/orders-controller';

export const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);
ordersRouter.get('/:id', getOrderById);
ordersRouter.post('/', createOrder);
ordersRouter.put('/', updateOrder);
ordersRouter.delete('/', deleteOrder);
