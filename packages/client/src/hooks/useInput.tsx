import { useState, ChangeEvent } from 'react';

type UseInputProps = {
  validateValue: (value: string) => boolean;
};

type UseInputReturn = {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangedHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

const useInput = ({ validateValue }: UseInputProps): UseInputReturn => {
  const [enteredInputValue, setEnteredInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateValue(enteredInputValue);
  const hasError = !inputIsValid && isTouched;

  const valueChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredInputValue('');
    setIsTouched(false);
  };

  return {
    value: enteredInputValue,
    isValid: inputIsValid,
    hasError,
    valueChangedHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
