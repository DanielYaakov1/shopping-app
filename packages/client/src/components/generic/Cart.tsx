import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Product, { IProductProps } from './Product';

const useStyles = makeStyles(() =>
     createStyles({
          totalAmount: {
               display: 'flex',
               alignItems: 'center',
               fontWeight: 'bold',
               fontSize: '1.5rem',
               margin: '1rem 0',
          },
     })
);
export const Cart = () => {
     const items = useSelector((state: RootState) => state.productReducer.items);
     const totalAmount = useSelector((state: RootState) => state.productReducer.totalAmount);
     //const dispatch = useDispatch();
     const classes = useStyles();
     return (
          <div>
               <ul
                    style={{
                         display: 'flex',
                         flexDirection: 'row',
                         alignItems: 'center',
                         justifyContent: 'center',
                         width: '100%',
                         height: '100%',
                         padding: '1rem',
                         backgroundColor: '#f5f5f5',
                         border: '1px solid #e61111',
                    }}>
                    {items.map((item: IProductProps, i: number) => (
                         <Product key={i} {...item} />
                    ))}
               </ul>
               <div className={classes.totalAmount}>
                    <span>Total Amount:</span>
                    <span>{totalAmount}</span>
               </div>
          </div>
     );
};
export default Cart;
