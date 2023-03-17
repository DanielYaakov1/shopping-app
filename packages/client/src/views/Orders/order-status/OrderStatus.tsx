import React, { memo } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import useStyles from './useStyles';

interface IOrderStatus {
  status: number;
}

const OrderStatus = memo(({ status }: IOrderStatus) => {
  const classes = useStyles();
  const steps = ['Created', 'Processing', 'Shipped', 'Delivered'];

  return (
    <div className={classes.root}>
      <Stepper activeStep={status}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} className={status >= index ? classes.completed : ''}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
});

export default OrderStatus;
