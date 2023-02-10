export interface IShippingOrder {
  city: string;
  street: string;
  zipCode: string;
  description?: string;
  createdAt?: Date | undefined;
  items: any;
  //shippingDate: Date | null;
  shippingDate: any;
  uId: string | undefined;
  totalPrice: number;
  orderNumber?: string;
}
