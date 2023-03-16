import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersActions from '../../../actions/OrdersActions';
import Spinner from '../../../components/Spinner';
import { setOrders } from '../../../store/slices/orderSlice';
import { RootState } from '../../../store';
import CardOrder from '../../../components/CardOrder';
import useStyles from './useStyles';
import { IShippingOrder } from '../../../interfaces';

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

export interface IOrderPage {
  orders: IShippingOrder[];
}

const OrderPage = ({ className, children }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getOrdersByUserId } = OrdersActions();
  const userId = useSelector((state: RootState) => state.userReducer.uid);
  const { orders, isLoadingOrders } = useSelector((state: RootState) => state.orderReducer);

  const fetchOrdersByUserId = useCallback(async () => {
    const { orders }: IOrderPage = await getOrdersByUserId(userId);

    const shippingDateConvert = orders.map((order) => {
      const shippingDate = new Date(order.shippingDate || '');
      const createDate = new Date(order.createdAt || '');
      order.shippingDate = shippingDate;
      order.createdAt = createDate;
      return order;
    });
    dispatch(setOrders(shippingDateConvert));
  }, [dispatch, userId, getOrdersByUserId]);

  useEffect(() => {
    fetchOrdersByUserId();
  }, [fetchOrdersByUserId]);

  return (
    <div className="cont">
      {isLoadingOrders ? <Spinner /> : <CardOrder classes={classes} orders={orders} />}
      {orders.length ? '' : <h1>You have no orders </h1>}
    </div>
  );
};
export default OrderPage;
