import Box from '@mui/material/Box';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { setPurchaseModal } from '../../store/slices/orderSlice';
import { useCallback, useEffect, useState } from 'react';
import MyButton from '../Button/MyButton';
import { RootState } from '../../store/store';
import { setDisableSubmitButton } from '../../store/slices/appSlice';
import {
  checkNotCharacters,
  checkNotNumbersOrSpecialCharacters,
} from '../../services/ValidationHelper';
import { updateAllCartState } from '../../store/slices/cartSlice';
import { createOrderAction } from '../../actions/OrdersAction';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const OrderForm = () => {
  const isDisableButton = useSelector((state: RootState) => state.appReducer.isDisableSubmitButton);
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const uidCreateTheOrder = useSelector((state: RootState) => state.appReducer.user?.uid);
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [shippingDate, setShippingDate] = useState<Dayjs | null>(null);
  const validationCity = checkNotNumbersOrSpecialCharacters(city);
  const validationStreet = checkNotNumbersOrSpecialCharacters(street);
  const validationZipCode = checkNotCharacters(zipCode);
  const checkCartItemsCount = useCallback(() => items.length > 0, [items.length]);

  const getIdProductInTheCart = useCallback((): string[] => {
    return items.map((item) => item._id);
  }, [items]);

  useEffect(() => {
    //check validation for all fields + change submit button state according to validation fields
    const validationOfAllOrderFields =
      validationCity && validationStreet && validationZipCode && shippingDate?.isValid();
    dispatch(setDisableSubmitButton(validationOfAllOrderFields ? false : true));
  }, [
    dispatch,
    shippingDate,
    shippingDate?.isValid,
    validationCity,
    validationStreet,
    validationZipCode,
  ]);

  const submitHandler = useCallback(
    //submit form order (create POST request to backend + change modal state + update all cart state after submit form )
    async (event: { preventDefault: () => void }) => {
      event.preventDefault();
      await createOrderAction({
        city,
        street,
        zipCode,
        items: getIdProductInTheCart(),
        shippingDate,
        uId: uidCreateTheOrder,
      });
      dispatch(setPurchaseModal(false));
      dispatch(
        updateAllCartState({
          items: [],
          totalAmount: 0,
          isCartModalOpen: false,
        })
      );
    },
    [city, dispatch, getIdProductInTheCart, shippingDate, street, uidCreateTheOrder, zipCode]
  );

  return checkCartItemsCount() ? (
    <form onSubmit={submitHandler}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={!validationCity}
          helperText={!validationCity ? 'The pattern you entered is invalid' : ''}
          id="outlined-basic"
          label="City"
          variant="outlined"
        />
        <TextField
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          error={!validationStreet}
          helperText={!validationStreet ? 'The pattern you entered is invalid' : ''}
          id="outlined-basic"
          label="Street"
          variant="outlined"
        />
        <TextField
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          error={!validationZipCode}
          helperText={!validationZipCode ? 'The pattern you entered is invalid' : ''}
          id="outlined-basic"
          label="zipCode"
          variant="outlined"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast={true}
            label="Shipping Date"
            value={shippingDate}
            onChange={(newValue) => {
              setShippingDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <MyButton label={'Order Now'} type={'submit'} disabled={isDisableButton} />
    </form>
  ) : null;
};
export default OrderForm;
