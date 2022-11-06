import { useDispatch } from 'react-redux';
import { IShippingOrder } from '../interfaces/index';
import { setErrorOrder, setLoadingOrder } from '../store/slices/orderSlice';
import HttpService from '../services/httpService';
import { ROUTES } from '../utils/constants/index';
import { useCallback } from 'react';
import useHttp from '../hooks/useHttp';

const OrdersActions = () => {
  const dispatch = useDispatch();
  const { httpRequest } = useHttp();
  const { requestProtectedRoute } = HttpService();

  const getAllOrders = async () => {};
  const getOrder = async () => {};

  const getOrderByUserId = useCallback(
    //Route to get order by userId
    async (uid: string) => {
      try {
        dispatch(setLoadingOrder(true));
        const response = await requestProtectedRoute(`${ROUTES.ORDERS_API}${uid}`);
        return response;
      } catch (err) {
        dispatch(setErrorOrder(err as string));
      } finally {
        dispatch(setLoadingOrder(false));
      }
    },
    [dispatch, requestProtectedRoute]
  );

  const createOrder = async (userOrderData: IShippingOrder) => {
    try {
      dispatch(setLoadingOrder(true));
      const response = await httpRequest(ROUTES.ORDERS_API, 'POST', { ...userOrderData });
      return response;
    } catch (err) {
      dispatch(setErrorOrder(err as string));
    } finally {
      dispatch(setLoadingOrder(false));
    }
  };
  const updateOrder = async () => {};
  return { getOrderByUserId, updateOrder, createOrder, getOrder, getAllOrders };
};
export default OrdersActions;
