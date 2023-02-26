import { paymentChildState } from '../components/PaymentForm/PaymentForm';
import { IFullAddress } from './../store/slices/orderSlice';
export interface IShippingOrder {
  description?: string;
  createdAt?: Date | undefined;
  items: any;
  //shippingDate: Date | null;
  shippingDate: any;
  uId: string | undefined;
  totalPrice: number;
  orderNumber?: string;
  fullAddress: IFullAddress;
  payment: paymentChildState;
}
