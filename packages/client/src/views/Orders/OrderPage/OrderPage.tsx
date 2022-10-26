import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionsOrder from '../../../actions/OrdersAction';
import Spinner from '../../../components/Spinner/Spinner';
import { setOrders } from '../../../store/slices/orderSlice';
import { RootState } from '../../../store/store';
import { CardOrder } from '../../../components/CardOrder/CardOrder';
import { OrdersStyle } from '../../../assets/style/components/OrdersStyle';

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Order = ({ className, children }: Props) => {
  const classes = OrdersStyle();
  const dispatch = useDispatch();
  const { getOrderById } = ActionsOrder();
  const uid = useSelector((state: RootState) => state.userReducer.uid);
  const orders = useSelector((state: RootState) => state.orderReducer.orders);
  const isLoadingOrder = useSelector((state: RootState) => state.orderReducer.isLoading);

  useEffect(() => {
    async function fetchOrderByID() {
      const { orders } = await getOrderById(uid);
      dispatch(setOrders(orders));
      console.log(orders, 'this is all orders');
    }
    fetchOrderByID();
  }, [dispatch, uid]);

  return (
    <div>
      <h1>Orders</h1>
      {!isLoadingOrder ? <CardOrder classes={classes} orders={orders} /> : <Spinner />}
    </div>
  );
};
export default Order;
