import React, { useState } from 'react';
import useStyles from './useStyles';

function ShipTo() {
  const classes = useStyles();

  return (
    <div className={classes.shipToContainer}>
      <div className={classes.shipToContext}>
        <p>John Doe</p>
        <p>123 Main St</p>
        <p>Anytown, USA 12345</p>
      </div>
    </div>
  );
}

export default ShipTo;

//    onMouseEnter={handleMouseEnter}
//    onMouseLeave={handleMouseLeave}
//       style={{ backgroundColor: isHovering ? 'lightgray' : 'white' }}
