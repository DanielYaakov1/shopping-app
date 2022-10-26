import { IShippingOrder } from '../../interfaces';

export function CardOrder(props: {
  orders: IShippingOrder[];
  classes: {
    card: string | undefined;
    cardTop: string | undefined;
    cardContent: string | undefined;
    cardImage: string | undefined;
    cardName: string | undefined;
    cardFooter: string | undefined;
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
          {order.items.map((item: any) => (
            <div className={props.classes.cardContent}>
              <div className={props.classes.cardImage}>
                <img alt={item.name} src={item.image}></img>
              </div>
              <div className={props.classes.cardName}>{item.name}</div>
              <div>Amount:X</div>
              <div className={props.classes.cardName}>price:{item.price}</div>
            </div>
          ))}
          <div className={props.classes.cardFooter}>
            <div>description: test should be text here</div>
          </div>
        </div>
      ))}
    </div>
  );
}
