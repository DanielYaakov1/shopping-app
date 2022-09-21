import { createOrder, deleteOrder, getAllOrders, updateOrder } from './../controllers/orders-controller';
import { Router } from 'express';

export const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);
ordersRouter.post('/', createOrder);
ordersRouter.put('/', updateOrder);
ordersRouter.delete('/', deleteOrder);
