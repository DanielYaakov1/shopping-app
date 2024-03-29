import React, { memo } from 'react';
import { useState, useCallback } from 'react';
import { InputStyle } from './useStyles';

export type MyInputProps = {
  value: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  label: string;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkInputValueIsValid?: ((userInputValue: string) => boolean) | null;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  errMessage: string;
};

const MyInput = memo(
  ({
    handleChangeValue,
    value,
    placeholder,
    type,
    required,
    label,
    checkInputValueIsValid,
    errMessage,
  }: MyInputProps) => {
    const [errorMessage, setErrorMessage] = useState('');

    const checkAllFiledIsValid = useCallback(
      (userInputValue: string) => {
        const isAllValueValid = checkInputValueIsValid
          ? checkInputValueIsValid(userInputValue)
          : true;
        if (isAllValueValid && value) {
          setErrorMessage('');
        } else {
          setErrorMessage(errMessage);
        }
      },
      [checkInputValueIsValid, value, errMessage]
    );

    return (
      <div>
        {label}
        <InputStyle
          value={value}
          onChange={(e) => {
            handleChangeValue(e);
          }}
          onBlur={(value) => checkAllFiledIsValid(value.target.value)}
          placeholder={placeholder}
          type={type}
          name={label}
        />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </div>
    );
  }
);
export default MyInput;
