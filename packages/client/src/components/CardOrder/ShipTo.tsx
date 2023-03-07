import React, { useState } from 'react';

function ShipTo() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      style={{
        backgroundColor: 'wheat',
        borderRadius: '5px',
        padding: '2px 2px ',
        width: '250px',
        maxHeight: 'none',
        opacity: 1,
        // top: '20px',
        // left: '20px',
        // position: 'absolute',
        display: 'block',
      }}>
      <p>John Doe</p>
      <p>123 Main St</p>
      <p>Anytown, USA 12345</p>
    </div>
  );
}

export default ShipTo;

//    onMouseEnter={handleMouseEnter}
//    onMouseLeave={handleMouseLeave}
//       style={{ backgroundColor: isHovering ? 'lightgray' : 'white' }}
