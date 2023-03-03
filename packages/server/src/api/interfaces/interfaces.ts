/* eslint-disable no-unused-vars */
export interface IAuthenticator {
  login: (email: string, password: string) => Promise<IUser>;
  register: (email: string, password: string) => Promise<IUser>;
}

export type IUser = {
  token: string;
  uid: string;
  user: any;
  isAdmin?: boolean;
};

export interface IProductProps {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
  id: string;
}

export interface IOrder {
  city: string;
  street: string;
  zipCode: string;
  description?: string;
  destinationDate?: Date;
  items: any;
  createdAt?: Date;
  uid?: string;
  totalPrice: string;
  amountItems: string;
  status: string;
}

export interface IAdmin {
  uid: string;
  email: string;
}

export interface IFullAddressS {
  city: string;
  lastName: string;
  firstName: string;
  address1: string;
  country: string;
  zip: string;
}
