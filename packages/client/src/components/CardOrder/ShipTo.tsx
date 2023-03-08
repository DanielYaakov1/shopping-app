import { memo } from 'react';
import { propsFullAddress } from '../AddressForm/AddressForm';
import useStyles from './useStyles';

const ShipTo = memo(({ fullAddress }: propsFullAddress) => {
  const classes = useStyles();
  return (
    <div className={classes.shipToContainer}>
      <div className={classes.shipToContext}>
        <h5>
          {fullAddress.firstName} {fullAddress.lastName}
        </h5>
        <p>{fullAddress.address1}</p>
        <p>
          {fullAddress.city}, {fullAddress.country} {fullAddress.zip}
        </p>
      </div>
    </div>
  );
});

export default ShipTo;
