import * as React from 'react';
import { useCallback, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm, { PaymentDetails } from '../PaymentForm/PaymentForm';
import Review from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IFullAddress, setCheckoutOpen } from '../../store/slices/orderSlice';
import { cartInitialState, IItems, updateAllCartState } from '../../store/slices/cartSlice';
import ActionsOrders from '../../actions/OrdersActions';
import { IShippingOrder } from '../../interfaces';

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const [result, setResult] = useState<IShippingOrder>();
  const [paymentDetails, setPaymentInputs] = useState<PaymentDetails>({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setPaymentInputs({ ...paymentDetails, [name]: value });
    },
    [paymentDetails]
  );

  const { uid } = useSelector((state: RootState) => state.userReducer);
  const { items, totalAmount } = useSelector((state: RootState) => state.cartReducer);
  const { fullAddress, isCheckoutOpen, shippingDate } = useSelector(
    (state: RootState) => state.orderReducer
  );

  const { createOrder } = ActionsOrders();
  const steps = ['Shipping address', 'Payment details', 'Review your order'];

  const handleCheckoutForm = useCallback(() => {
    dispatch(setCheckoutOpen(!isCheckoutOpen));
  }, [dispatch, isCheckoutOpen]);

  const allValuesAreNonEmpty = useCallback(
    (obj: Partial<IFullAddress>): boolean =>
      Object.values(obj).every((value) => !!value && String(value).trim() !== ''),
    []
  );

  const handleNext = useCallback(async () => {
    if (activeStep === steps.length - 1) {
      console.log('submit order ');
      const res = await createOrder({
        fullAddress: { ...fullAddress },
        payment: { ...paymentDetails },
        items: items.map((item: IItems) => {
          return { amount: item.amount, productId: item.productId };
        }),
        uId: uid,
        totalPrice: totalAmount,
        shippingDate: shippingDate,
      });
      const { order } = res;
      setResult(order);
      dispatch(updateAllCartState(cartInitialState));
    }
    setActiveStep(activeStep + 1);
  }, [
    activeStep,
    steps.length,
    createOrder,
    fullAddress,
    paymentDetails,
    items,
    uid,
    shippingDate,
    totalAmount,
    dispatch,
  ]);

  const handleBack = useCallback(() => {
    setActiveStep(activeStep - 1);
  }, [activeStep]);

  const getStepContent = useCallback(
    (step: number) => {
      switch (step) {
        case 0:
          return <AddressForm fullAddress={fullAddress} shippingDate={shippingDate} />;
        case 1:
          return (
            <PaymentForm handleInputChange={handleInputChange} paymentDetails={paymentDetails} />
          );
        case 2:
          return <Review paymentDetails={paymentDetails} />;
        default:
          throw new Error('Unknown step');
      }
    },
    [fullAddress, handleInputChange, paymentDetails, shippingDate]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position='absolute'
        color='default'
        className='zzz'
        elevation={1}
        sx={{
          position: 'relative',
          height: '50px',
          bgcolor: 'white',
          border: '1px solid white',
        }}>
        <Toolbar>
          <IconButton
            aria-label='close'
            onClick={handleCheckoutForm}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        {activeStep === 0 ? <ArrowBackIcon onClick={handleCheckoutForm} /> : null}
      </AppBar>
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant='h5' gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant='subtitle1'>
                Your order number is #{result?.orderNumber}. We have emailed your order
                confirmation, and will send you an update when your order has shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  disabled={!allValuesAreNonEmpty(fullAddress)}
                  variant='contained'
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
