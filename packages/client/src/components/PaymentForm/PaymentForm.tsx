import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useCallback, useState } from 'react';

export type paymentChildState = {
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
};

interface IPaymentProps {
  onInputChange: (inputValues: paymentChildState) => void;
  savedInputValues: paymentChildState;
}

const PaymentForm = ({ onInputChange, savedInputValues }: IPaymentProps) => {
  const [inputValues, setInputValues] = useState<paymentChildState>(savedInputValues);
  console.log('🚀 ~ file: PaymentForm.tsx:27 ~ PaymentForm ~ inputValues', inputValues);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInputValues({ ...inputValues, [name]: value });
      debugger;
      onInputChange(inputValues);
    },
    [inputValues, onInputChange]
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            name="cardName"
            value={inputValues.cardName}
            onChange={handleInputChange}
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={inputValues.cardNumber}
            onChange={handleInputChange}
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={inputValues.expDate}
            onChange={handleInputChange}
            id="expDate"
            name="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={inputValues.cvv}
            onChange={handleInputChange}
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
