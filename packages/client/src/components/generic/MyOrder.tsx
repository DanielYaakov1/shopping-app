import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { setPurchaseModal } from '../../store/slices/orderSlice';
import { useCallback, useEffect, useState } from 'react';
import MyButton from './MyButton';
import { RootState } from '../../store/store';
import { setDisableSubmitButton } from '../../store/slices/appSlice';
import { checkNotCharacters, checkNotNumbersOrSpecialCharacters } from '../../services/ValidationHelper';

const MyOrderModal = () => {
  const isDisableButton = useSelector((state: RootState) => state.appReducer.isDisableSubmitButton);
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [shippingDate, setShippingDate] = useState('');
  const dispatch = useDispatch();

  const validationOfAllOrderFields =
    checkNotNumbersOrSpecialCharacters(city) &&
    checkNotNumbersOrSpecialCharacters(street) &&
    checkNotCharacters(zipCode);

  useEffect(() => {
    dispatch(setDisableSubmitButton(validationOfAllOrderFields ? false : true));
  }, [dispatch, validationOfAllOrderFields]);

  const submitHandler = useCallback(
    (event: { preventDefault: () => void }) => {
      event.preventDefault();
      dispatch(setPurchaseModal(false));
    },
    [dispatch]
  );

  return (
    <form onSubmit={submitHandler}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error
          helperText="Incorrect entry."
          id="outlined-basic"
          label="City"
          variant="outlined"
        />
        <TextField
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          id="outlined-basic"
          label="Street"
          variant="outlined"
        />
        <TextField
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          id="outlined-basic"
          label="zipCode"
          variant="outlined"
        />
        <TextField
          value={shippingDate}
          onChange={(e) => setShippingDate(e.target.value)}
          id="outlined-basic"
          label="Shipping Date"
          variant="outlined"
        />
      </Box>
      <MyButton label={'Order Now'} type={'submit'} disabled={isDisableButton} />
    </form>
  );
};
export default MyOrderModal;
