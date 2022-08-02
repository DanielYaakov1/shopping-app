//import { getProductByName } from './../../../server/src/api/controllers/products-controller';
export const getAllProductsAction = async () => {
     try {
          const response = await fetch('/products');
          const resData = await response.json();
          return resData;
     } catch (err) {
          console.log(err, 'this is the error');
     }
};
export const getProductAction = () => {};
export const createProductAction = () => {};
export const updateProductAction = () => {};
export const deleteProductAction = () => {};
export const getProductsByCategoryAction = () => {};

export const getProductByName = async (value: string) => {
     try {
          const response = await fetch(`/products/${value}`);
          const resData = await response.json();
          console.log(resData);
          return resData;
     } catch (err) {
          console.log(err);
     }
};

export const getProductByName1 = async () => {
     try {
          const response = await fetch(`/products/tv1`);
          const resData = await response.json();
          console.log(resData);
          //return resData;
     } catch (err) {
          console.log(err);
     }
};
