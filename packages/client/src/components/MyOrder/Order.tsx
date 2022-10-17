import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../actions/OrdersAction';
import { IShippingOrder } from '../../interfaces';
import { IItems } from '../../store/slices/cartSlice';
import { setOrders } from '../../store/slices/orderSlice';
import { RootState } from '../../store/store';
import CartItem from '../CartItem/CartItem';

export type Props = {
  className?: string;
  children?: React.ReactNode;
};
const Order = ({ className, children }: Props) => {
  const dispatch = useDispatch();
  const uid = useSelector((state: RootState) => state.userReducer.uid);
  const orders = useSelector((state: RootState) => state.orderReducer.orders);

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
        {orders.map((order: IShippingOrder, i: number) => (
          <div
            key={i}
            style={{
              listStyle: 'none',
              margin: '1rem',
              padding: 0,
              maxHeight: '20rem',
              overflow: 'scrolls',
              border: 'solid #a57171 1px',
            }}>
            #{i}
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
        ))}
      </div>
    </div>
  );
};
export default Order;
