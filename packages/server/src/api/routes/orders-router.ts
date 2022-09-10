import { createOrder, getAllOrders } from './../controllers/orders-controller';
import { Router } from 'express';
import { requireAuth } from '../../middleware/requireAuth';
import { Orders } from '../../models/orders-model';

export const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);
ordersRouter.post('/', createOrder);
