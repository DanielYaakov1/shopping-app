import { Orders } from '../../models/orders-model';

import { IOrder } from './../interfaces/interfaces';

export class OrderHandler {
  async getAllOrders(): Promise<IOrder[]> {
    return Orders.find().populate('items');
  }
  async getOrderById(id: string): Promise<IOrder[]> {
    return Orders.find({ uId: id }).populate('items.productId');
  }
  async deleteOrder(id: string): Promise<IOrder | null> {
    return Orders.findByIdAndDelete(id);
  }
  async createOrder(order: IOrder): Promise<IOrder> {
    return Orders.create(order);
  }
  async updateOrder(_id: string, detailsOrder: IOrder): Promise<IOrder[] | null> {
    return Orders.findByIdAndUpdate(_id, detailsOrder, { new: true });
  }
}
