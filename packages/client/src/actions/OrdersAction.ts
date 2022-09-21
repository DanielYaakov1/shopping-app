import { IShippingOrder } from '../interfaces/index';

export const getAllOrdersAction = async () => {};
export const getOrderAction = async () => {};
export const createOrderAction = async (userOrderData: IShippingOrder) => {
  try {
    const response = await fetch('/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userOrderData,
      }),
    });
    const resData = await response.json();
    return resData;
  } catch (error) {
    throw error;
  }
};
export const updateOrderAction = async () => {};
