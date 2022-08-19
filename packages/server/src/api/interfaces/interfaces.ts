export interface Authenticator {
     login: (email: string, password: string) => Promise<User>;
     register: (email: string, password: string) => Promise<User>;
}

export type User = {
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
