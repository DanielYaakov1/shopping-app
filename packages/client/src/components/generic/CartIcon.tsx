import { memo, MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';

export type props = {
  numberCartItem: number;
  sizeIcon?: string;
  badgeColor?: string;
  onClick?: MouseEventHandler | undefined;
};

const CartIcon = memo(({ numberCartItem, onClick }: props) => {
  return (
    <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={onClick}>
      <Badge badgeContent={numberCartItem} color="success">
        <ShoppingBagOutlinedIcon />
      </Badge>
    </IconButton>
  );
});
export default CartIcon;
