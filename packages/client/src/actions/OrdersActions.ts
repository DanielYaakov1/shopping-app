import { useDispatch } from 'react-redux';
import { IShippingOrder } from '../interfaces/index';
import { setErrorOrder, setLoadingOrder } from '../store/slices/orderSlice';
import { ROUTES } from '../utils/constants/index';
import { useCallback } from 'react';
import useHttp from '../hooks/useHttp';

const OrdersActions = () => {
  const dispatch = useDispatch();
  const { httpRequest } = useHttp();

  const getAllOrders = useCallback(async () => {}, []);
  const getOrder = useCallback(async () => {}, []);

  const getOrdersByUserId = useCallback(
    //Route to get order by userId
    async (uid: string) => {
      try {
        dispatch(setLoadingOrder(true));
        const response = await httpRequest(`${ROUTES.ORDERS_API}${uid}`);
        return response;
      } catch (err: any) {
        dispatch(setErrorOrder(err));
      } finally {
        dispatch(setLoadingOrder(false));
      }
    },
    [dispatch, httpRequest]
  );

  const createOrder = useCallback(
    async (userOrderData: IShippingOrder) => {
      try {
        dispatch(setLoadingOrder(true));
        const response = await httpRequest(ROUTES.ORDERS_API, 'POST', { ...userOrderData });
        return response;
      } catch (err) {
        dispatch(setErrorOrder(err as string));
      } finally {
        dispatch(setLoadingOrder(false));
      }
    },
    [dispatch, httpRequest]
  );
  const updateOrder = useCallback(async () => {}, []);
  return { getOrdersByUserId, updateOrder, createOrder, getOrder, getAllOrders };
};
export default OrdersActions;
