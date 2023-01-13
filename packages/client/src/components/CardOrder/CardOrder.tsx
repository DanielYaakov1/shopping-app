import { IShippingOrder } from '../../interfaces';
import Product from '../Product';

const CardOrder = (props: {
  orders: IShippingOrder[];
  classes: {
    card: string;
    cardTop: string;
    cardContent: string;
    cardImage: string;
    cardName: string;
    cardFooter: string;
  };
}) => {
  return (
    <div>
      {props.orders.map((order: IShippingOrder, index: number) => (
        <div key={index} className={props.classes.card}>
          <div className={props.classes.cardTop}>
            <div>Order Created: {order.createdAt}</div>
            <div>Total Price:{order.totalPrice}</div>
            <div>
              Delivery to:
              <div>City:{order.city}</div>
              <div>Street:{order.city}</div>
            </div>
            <div>Order Number: {order.amount}</div>
          </div>
          <div>
            <div className={props.classes.cardContent}>
              Items
              {order.items.map((item: any, index: number) => (
                <Product
                  key={index}
                  _id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className={props.classes.cardFooter}>
            <div>description: test should be text here</div>
            <div>Shipping Date: {order.shippingDate}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardOrder;
