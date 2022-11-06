import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersActions from '../../../actions/OrdersActions';
import Spinner from '../../../components/Spinner/Spinner';
import { setOrders } from '../../../store/slices/orderSlice';
import { RootState } from '../../../store/store';
import { CardOrder } from '../../../components/CardOrder/CardOrder';
import { OrdersStyle } from '../../../assets/style/components/OrdersStyle';

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const OrderPage = ({ className, children }: Props) => {
  const classes = OrdersStyle();
  const dispatch = useDispatch();
  const { getOrderByUserId } = OrdersActions();
  const userId = useSelector((state: RootState) => state.userReducer.uid);
  const { orders, isLoadingOrders } = useSelector((state: RootState) => state.orderReducer);

  const fetchOrdersByUserId = useCallback(async () => {
    const { orders } = await getOrderByUserId(userId);
    dispatch(setOrders(orders));
    //console.log(orders, 'this is all orders');
  }, [dispatch, userId]);

  useEffect(() => {
    fetchOrdersByUserId();
  }, [fetchOrdersByUserId]);

  return (
    <div>
      <h1>Orders</h1>
      {isLoadingOrders ? <Spinner /> : <CardOrder classes={classes} orders={orders} />}
    </div>
  );
};
export default OrderPage;
