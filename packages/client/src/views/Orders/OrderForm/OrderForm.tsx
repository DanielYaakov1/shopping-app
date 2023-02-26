import Box from '@mui/material/Box';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckoutOpen } from '../../../store/slices/orderSlice';
import { useCallback, useEffect, useState } from 'react';
import MyButton from '../../../components/Button';
import { RootState } from '../../../store';
import { setDisableSubmitButton } from '../../../store/slices/appSlice';
import {
  checkNotCharacters,
  checkNotNumbersOrSpecialCharacters,
} from '../../../utils/helpers/validation.helper';
import { cartInitialState, IItems, updateAllCartState } from '../../../store/slices/cartSlice';
import ActionsOrders from '../../../actions/OrdersActions';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { checkGreaterNumberInArray } from '../../../utils/helpers/array.helpers';

export interface IProduct {}

const OrderForm = () => {
  const { createOrder } = ActionsOrders();
  const isDisableButton = useSelector((state: RootState) => state.appReducer.isDisableSubmitButton);
  const { items, totalAmount } = useSelector((state: RootState) => state.cartReducer);
  const uidCreateTheOrder = useSelector((state: RootState) => state.userReducer.uid);
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [shippingDate, setShippingDate] = useState<Dayjs | null>(null);
  const validationCity = checkNotNumbersOrSpecialCharacters(city);
  const validationStreet = checkNotNumbersOrSpecialCharacters(street);
  const validationZipCode = checkNotCharacters(zipCode);

  const checkCartItemsCount = useCallback(() => checkGreaterNumberInArray(items, 0), [items]);

  useEffect(() => {
    //NOTE:check validation for all fields + change submit button state according to validation fields
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
    //NOTE:form order (create POST request to backend + change modal state + update all cart state after submit form )
    async (event: { preventDefault: () => void }) => {
      event.preventDefault();
      // await createOrder({
      //   city,
      //   street,
      //   zipCode,
      //   items: items.map((item: IItems) => {
      //     return { amount: item.amount, productId: item.productId };
      //   }),
      //   shippingDate,
      //   uId: uidCreateTheOrder,
      //   totalPrice: totalAmount,
      //   address1: '',
      //   zip: '',
      // });
      dispatch(setCheckoutOpen(false));
      dispatch(updateAllCartState(cartInitialState));
    },
    [
      createOrder,
      city,
      street,
      zipCode,
      items,
      shippingDate,
      uidCreateTheOrder,
      totalAmount,
      dispatch,
    ]
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
