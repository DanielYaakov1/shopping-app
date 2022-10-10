export interface IShippingOrder {
  city: string;
  street: string;
  zipCode: string;
  description?: string;
  createdAt?: Date;
  items: string[];
  shippingDate?: null | object;
  uId: string | undefined;
}
