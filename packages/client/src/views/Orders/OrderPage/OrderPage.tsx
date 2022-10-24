import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionsOrder from '../../../actions/OrdersAction';
import Spinner from '../../../components/Spinner/Spinner';
import { IShippingOrder } from '../../../interfaces';
import { setOrders } from '../../../store/slices/orderSlice';
import { RootState } from '../../../store/store';

const useStyles = makeStyles(() =>
  createStyles({
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #8a2b06',
      padding: '1rem 0',
      margin: '1rem 0',
    },
  })
);

export type Props = {
  className?: string;
  children?: React.ReactNode;
};
const Order = ({ className, children }: Props) => {
  const classes = useStyles();
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
      <div>
        <h1>Orders</h1>
        {!isLoadingOrder ? (
          orders.map((order: IShippingOrder, i: number) => (
            <div key={i} className={classes.cartItem}>
              #{i + 1}
              <div>
                <div>city: {order.city}</div>
                <div>street: {order.street}</div>
                <div>zipCode: {order.zipCode}</div>
              </div>
              <div>description: {order.description}</div>
              <div>createdAt: {order.createdAt}</div>
              <div>Arrival date: {order.shippingDate}</div>
              <div>
                Items:
                {order.items.map((item: any) => (
                  <div>
                    <div>name:{item.name}</div>
                    <div>{item.amount}</div>
                    <div>price:{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
export default Order;
