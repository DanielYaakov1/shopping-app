import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersActions from '../../../actions/OrdersActions';
import Spinner from '../../../components/Spinner';
import { setOrders } from '../../../store/slices/orderSlice';
import { RootState } from '../../../store';
import CardOrder from '../../../components/CardOrder';
import useStyles from './useStyles';

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const OrderPage = ({ className, children }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getOrderByUserId } = OrdersActions();
  const userId = useSelector((state: RootState) => state.userReducer.uid);
  const { orders, isLoadingOrders } = useSelector((state: RootState) => state.orderReducer);

  const fetchOrdersByUserId = useCallback(async () => {
    const { orders } = await getOrderByUserId(userId);
    dispatch(setOrders(orders));
  }, [dispatch, userId, getOrderByUserId]);

  useEffect(() => {
    fetchOrdersByUserId();
  }, [fetchOrdersByUserId]);

  return (
    <div className="cont">
      {isLoadingOrders ? <Spinner /> : <CardOrder classes={classes} orders={orders} />}
    </div>
  );
};
export default OrderPage;
