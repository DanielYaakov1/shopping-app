//import { getProductByName } from './../../../server/src/api/controllers/products-controller';
export const getAllProductsAction = async () => {
  try {
    const response = await fetch('/api/v1/products');
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err, 'this is the error');
  }
};
export const getProductAction = () => {};
export const createProductAction = async () => {
  try {
    const response = await fetch('/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'test',
        price: 111,
        description: 'test',
        image: 'test',
      }),
    });
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err, 'this is the error');
  }
};
export const updateProductAction = () => {};
export const deleteProductAction = () => {};
export const getProductsByCategoryAction = () => {};

export const getProductByName = async (value: string) => {
  try {
    const response = await fetch(`/api/v1/products/${value}`);
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
};

export const getPageAndProductCount = async (pageNumber: number, limitItem?: string | number) => {
  //const paginationItem = limitItem ? parseInt(limitItem) : 2;
  try {
    const response = await fetch('/api/v1/products/get-products-count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: pageNumber,
        limit: limitItem,
      }),
    });
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
};
