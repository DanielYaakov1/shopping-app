export interface IAuthenticator {
  login: (email: string, password: string) => Promise<IUser>;
  register: (email: string, password: string) => Promise<IUser>;
}

export type IUser = {
  token?: string;
  id: string;
};

export interface IProductProps {
  name: string;
  price: number;
  description: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  id: string;
}
