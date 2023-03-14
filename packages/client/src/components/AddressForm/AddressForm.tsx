import * as React from 'react';
import { useState, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { setAddressFields, setShippingDate } from '../../store/slices/orderSlice';
import { isEmptyField } from '../../utils/helpers/validation.helper';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import useStorageService from '../../services/useStorageService';

interface IAddress {
  city: string;
  zip: string;
  lastName: string;
  firstName: string;
  country: string;
  address1: string;
}

export type propsFullAddress = {
  fullAddress: IAddress;
  shippingDate?: Date | null;
};

const AddressForm = ({ fullAddress, shippingDate }: propsFullAddress) => {
  const dispatch = useDispatch();
  const { city, zip, lastName, firstName, address1, country } = fullAddress;
  const [lastNameError, setLastNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [address1Error, setAddress1Error] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [zipError, setZipError] = useState(false);

  const handleBlurFirstName = useCallback(() => {
    setFirstNameError(isEmptyField(firstName));
  }, [firstName]);

  const handleBlurLastName = useCallback(() => {
    setLastNameError(isEmptyField(lastName));
  }, [lastName]);

  const handleBlurAddress1 = useCallback(() => {
    setAddress1Error(isEmptyField(address1));
  }, [address1]);

  const handleBlurCity = useCallback(() => {
    setCityError(isEmptyField(city));
  }, [city]);

  const handleBlurCountry = useCallback(() => {
    setCountryError(isEmptyField(country));
  }, [country]);

  const handleBlurZip = useCallback(() => {
    setZipError(isEmptyField(zip));
  }, [zip]);

  const [value, setValue] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'));
  const storageService = useStorageService();

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
    debugger;
    dispatch(setShippingDate(newValue));
    storageService.setItem('date', String(value));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required={true}
            value={firstName}
            onChange={(e) =>
              dispatch(setAddressFields({ data: e.target.value, field: 'firstName' }))
            }
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onBlur={handleBlurFirstName}
            error={firstNameError}
            helperText={firstNameError ? 'Field cannot be empty' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={lastName}
            onChange={(e) =>
              dispatch(setAddressFields({ data: e.target.value, field: 'lastName' }))
            }
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onBlur={handleBlurLastName}
            error={lastNameError}
            helperText={lastNameError ? 'Field cannot be empty' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            value={address1}
            onChange={(e) =>
              dispatch(setAddressFields({ data: e.target.value, field: 'address1' }))
            }
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onBlur={handleBlurAddress1}
            error={address1Error}
            helperText={address1Error ? 'Field cannot be empty' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={city}
            onChange={(e) => dispatch(setAddressFields({ data: e.target.value, field: 'city' }))}
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onBlur={handleBlurCity}
            error={cityError}
            helperText={cityError ? 'Field cannot be empty' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={zip}
            onChange={(e) => dispatch(setAddressFields({ data: e.target.value, field: 'zip' }))}
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onBlur={handleBlurZip}
            error={zipError}
            helperText={zipError ? 'Field cannot be empty' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={country}
            onChange={(e) => dispatch(setAddressFields({ data: e.target.value, field: 'country' }))}
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onBlur={handleBlurCountry}
            error={countryError}
            helperText={countryError ? 'Field cannot be empty' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Date&Time picker"
              value={shippingDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
