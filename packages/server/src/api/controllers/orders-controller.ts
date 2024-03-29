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
    const orderHandler = new OrderHandler();
    const orders = await orderHandler.getOrderById(String(req.params.id));
    res.status(200).send({ orders });
  } catch (err) {
    //add class for error message
    next(err);
  }
};
export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderHandler = new OrderHandler();
    const order = await orderHandler.createOrder(req.body);
    res.status(200).send({ order });
  } catch (err) {
    next(err);
  }
};
export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderHandler = new OrderHandler();
    const { id } = req.body;
    const order = await orderHandler.deleteOrder(id);
    order
      ? res.send({ isDeleted: true, order })
      : res.status(400).send({ message: 'No such order exists' });
  } catch (err) {
    next(err);
  }
};
export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderHandler = new OrderHandler();
    const { id } = req.query;
    const order = await orderHandler.updateOrder(String(id), req.body);
    order ? res.send(order) : res.status(400).send({ message: 'No such order exists' });
  } catch (err) {
    next(err);
  }
};
