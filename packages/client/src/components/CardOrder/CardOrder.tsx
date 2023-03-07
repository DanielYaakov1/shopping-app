import { IShippingOrder } from '../../interfaces';
import { IItems } from '../../store/slices/cartSlice';
import { getFullDateAndHour, getFullDate } from '../../utils/helpers/date.helpers';
import ComplexCard from '../complex-card';
import ShipTo from './ShipTo';
import useStyles from './useStyles';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  const classes = useStyles();
  const [isHovering, setIsHovering] = useState(false);
  console.log('🚀 ~ file: CardOrder.tsx:23 ~ isHovering:', isHovering);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleClick = () => {
    setIsHovering(!isHovering);
  };
  return (
    <div>
      <div>
        {props.orders?.map((order: IShippingOrder, index: number) => (
          <div key={index} className={props.classes.card}>
            <div className={props.classes.cardTop}>
              <div>Order Created: {order.createdAt ? getFullDateAndHour(order.createdAt) : ''}</div>
              <div>Total Price:{order.totalPrice.toFixed(2)}</div>
              <div>
                SHIP TO
                <div
                  className={classes.shipTo}
                  onClick={handleClick}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  style={{ display: 'flex' }}>
                  {order.fullAddress.firstName} {order.fullAddress.lastName}{' '}
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              <div>Order Number: {order.orderNumber}</div>
            </div>
            {isHovering ? <ShipTo /> : null}
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
      {/* <ShipTo></ShipTo> */}
    </div>
  );
};

export default CardOrder;
