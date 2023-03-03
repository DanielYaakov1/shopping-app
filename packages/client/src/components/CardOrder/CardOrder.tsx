import { IShippingOrder } from '../../interfaces';
import { IItems } from '../../store/slices/cartSlice';
import { getFullDateAndHour, getFullDate } from '../../utils/helpers/date.helpers';
import ComplexCard from '../complex-card';

const CardOrder = (props: {
  orders: IShippingOrder[];
  classes: {
    card: string;
    cardTop: string;
    cardContent: string;
    cardImage: string;
    cardName: string;
    cardFooter: string;
    cardContainer: string;
  };
}) => {
  return (
    <div className="as">
      {props.orders?.map((order: IShippingOrder, index: number) => (
        <div key={index} className={props.classes.card}>
          <div className={props.classes.cardTop}>
            <div>Order Created: {order.createdAt ? getFullDateAndHour(order.createdAt) : ''}</div>
            <div>Total Price:{order.totalPrice.toFixed(2)}</div>
            <div>
              Delivery to:
              <div>City:{order.fullAddress.city}</div>
              <div>Street:{order.fullAddress.address1}</div>
            </div>
            <div>Order Number: {order.orderNumber}</div>
          </div>
          <div>
            <div className={props.classes.cardContainer}>
              {order.items?.map((item: IItems, index: number) => (
                <div>
                  <div>Amount: {item.amount}</div>
                  <ComplexCard
                    key={index}
                    image={item.productId.image}
                    title={item.productId.name}
                    price={item.productId.price}
                    desc={item.productId.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={props.classes.cardFooter}>
            <div>description: test should be text here</div>
            <div>Shipping Date: {order.shippingDate ? getFullDate(order.shippingDate) : ''}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardOrder;
