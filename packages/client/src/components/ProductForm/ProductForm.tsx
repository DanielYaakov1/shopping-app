import { memo, useCallback, useRef, useState } from 'react';
import IconDrawer from '../IconDrawer/IconDrawer';

const ProductForm = memo((props: { onAddToCart: any; id: any }) => {
  const { onAddToCart, id } = props;
  const amountInputRef = useRef<HTMLInputElement | any>();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = useCallback(
    (event: { preventDefault: () => void }) => {
      event.preventDefault();
      const amountEntered = amountInputRef.current.value;
      const enteredAmountNumber = +amountEntered;
      if (amountEntered.trim().length === 0 || amountEntered < 1 || amountEntered > 5) {
        setAmountIsValid(false);
        return;
      }
      onAddToCart(enteredAmountNumber);
      console.log('form send successfully ');
    },
    [onAddToCart, amountInputRef]
  );

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={amountInputRef}
        name={`amount_+ ${id}`}
        type="number"
        min="1"
        max="55"
        step="1"
        defaultValue="1"
        placeholder="Amount"
      />
      <IconDrawer type="submit" />
      {!amountIsValid && <p>Please Entered valid number 1-5</p>}
    </form>
  );
});

export default ProductForm;
