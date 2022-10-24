import { useDispatch } from 'react-redux';
import { IShippingOrder } from '../interfaces/index';
import { setLoadingOrder } from '../store/slices/orderSlice';

const ActionsOrder = () => {
  const dispatch = useDispatch();

  const getAllOrders = async () => {};
  const getOrder = async () => {};
  const getOrderById = async (uid: string) => {
    try {
      dispatch(setLoadingOrder(true));
      const response = await fetch(`api/v1/orders/${uid}`);
      const resData = await response.json();
      dispatch(setLoadingOrder(false));
      return resData;
    } catch (err) {
      throw err;
    }
  };

  const createOrder = async (userOrderData: IShippingOrder) => {
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
  const updateOrder = async () => {};
  return { getOrderById, updateOrder, createOrder, getOrder, getAllOrders };
};
export default ActionsOrder;
