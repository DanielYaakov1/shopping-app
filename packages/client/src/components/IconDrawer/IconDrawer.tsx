import React, { memo } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStyles } from './useStyles';

export interface IconProps extends Partial<HTMLButtonElement> {
  type?: 'submit';
}

const IconButtons = memo(({ type }: IconProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton type={type} color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
});

export default IconButtons;
