import { memo, MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export type props = {
  numberCartItem: number;
  sizeIcon?: string;
  badgeColor?: string;
  onClick?: MouseEventHandler | undefined;
  isModalOpen?: any;
  handleModal?: () => void;
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: -2,
    padding: '4px 4px',
  },
}));

const CartIcon = memo(({ numberCartItem, onClick }: props) => {
  return (
    <IconButton
      size='small'
      aria-label='show 4 new mails'
      color='inherit'
      onClick={onClick}
      sx={{
        marginRight: '10px',
        borderRadius: 2,
      }}>
      <StyledBadge badgeContent={numberCartItem} color='error'>
        <ShoppingBagOutlinedIcon />
      </StyledBadge>
    </IconButton>
  );
});
export default CartIcon;
