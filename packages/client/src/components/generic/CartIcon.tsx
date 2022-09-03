import { memo } from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';

export type props = {
  numberCartItem: number;
  sizeIcon?: string;
  badgeColor?: string;
};

const CartIcon = memo(({ numberCartItem }: props) => {
  return (
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={numberCartItem} color="success">
        <ShoppingBagOutlinedIcon />
      </Badge>
    </IconButton>
  );
});
export default CartIcon;
