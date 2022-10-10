import { Orders } from '../../models/orders-model';
import { IOrder } from './../interfaces/interfaces';

export class OrderHandler {
  async getAllOrders(): Promise<IOrder[]> {
    return Orders.find().populate('items');
  }
  async getOrderById(_id: string): Promise<IOrder | null> {
    return Orders.findById(_id).populate('items');
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
