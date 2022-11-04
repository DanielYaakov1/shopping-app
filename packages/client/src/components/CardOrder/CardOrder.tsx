import { IShippingOrder } from '../../interfaces';
import Product from '../Product/Product';

export function CardOrder(props: {
  orders: IShippingOrder[];
  classes: {
    card: string;
    cardTop: string;
    cardContent: string;
    cardImage: string;
    cardName: string;
    cardFooter: string;
  };
}) {
  return (
    <div>
      {props.orders.map((order: IShippingOrder, i: number) => (
        <div key={i} className={props.classes.card}>
          <div className={props.classes.cardTop}>
            <div>Order Created: {order.createdAt}</div>
            <div>Total Price:{order.totalPrice}</div>
            <div>Ship To: {order.city + order.street}</div>
            <div>Order Number: XXX</div>
          </div>
          <div className={props.classes.cardContent}>
            {order.items.map((item: any, index: number) => (
              <Product
                key={index}
                _id={''}
                name={item.name}
                image={item.image}
                price={item.price}
                productId={''}
                description={item.description}
              />
            ))}
          </div>
          <div className={props.classes.cardFooter}>
            <div>description: test should be text here</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// <div className={props.classes.cardContent}>
//   <div className={props.classes.cardImage}>
//     <img alt={item.name} src={item.image}></img>
//   </div>
//   <div className={props.classes.cardName}>{item.name}</div>
//   <div>Amount:X</div>
//   <div className={props.classes.cardName}>price:{item.price}</div>
// </div>
