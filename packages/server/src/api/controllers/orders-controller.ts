import { Request, Response, NextFunction } from 'express';
import { OrderHandler } from '../handlers/order-handler';

export const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderHandler = new OrderHandler();
    const orders = await orderHandler.getAllOrders();
    res.status(200).send({ orders });
  } catch (err) {
    next(err);
  }
};
export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderHandler = new OrderHandler();
    const order = await orderHandler.createOrder(req.body);
    console.log(order);
    res.send(order);
  } catch (err) {
    next(err);
  }
};
export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    next(err);
  }
};
