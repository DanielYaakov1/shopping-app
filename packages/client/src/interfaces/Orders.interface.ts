export interface IShippingOrder {
  city: string;
  street: string;
  zipCode: string;
  description?: string;
  createdAt?: Date;
  items: string[];
  shippingDate: object | null;
  uId: string | undefined;
  totalPrice: number;
  amountItems: number;
  orderNumber?: string;
}
