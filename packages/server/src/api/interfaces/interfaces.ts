export interface Authenticator {
     login: (email: string, password: string) => Promise<User>;
     register: (email: string, password: string) => Promise<User>;
}

export type User = {
     token?: string;
     id: string;
};

export interface ProductActions {
     getAllProducts: () => Promise<ProductProps[]>;
     getProductById?: (id: string) => Promise<ProductProps>;
     createProduct?: (product: ProductProps) => Promise<ProductProps>;
     getProductByName: (name: string) => Promise<ProductProps>;
}

export type ProductProps = {
     name: string | null;
     price: number;
     description: string;
     image: string;
     createdAt?: Date;
     updatedAt?: Date;
     id: string;
};
