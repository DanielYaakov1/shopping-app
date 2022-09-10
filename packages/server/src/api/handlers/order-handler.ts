import { Orders } from '../../models/orders-model';
import { IOrder } from './../interfaces/interfaces';

export class OrderHandler {
  //add interface for orders
  async getAllOrders(): Promise<IOrder[]> {
    const getOrders = await Orders.find();
    return getOrders as unknown as IOrder[];
  }
  async getOrderById(id: string): Promise<IOrder[]> {
    const getOrderById = await Orders.findById(id);
    return getOrderById as unknown as IOrder[];
  }
  async deleteOrder(id: string): Promise<IOrder[]> {
    const deleteOrder = await Orders.findByIdAndDelete(id);
    return deleteOrder as unknown as IOrder[];
  }
  async createOrder(order: IOrder): Promise<IOrder[]> {
    const createOrder = await Orders.create(order);
    return createOrder as unknown as IOrder[];
  }
}
