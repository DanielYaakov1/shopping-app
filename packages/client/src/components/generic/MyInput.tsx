import React from 'react';
import { useState } from 'react';
import { Input } from '../../assets/style/generic/Input';

export type MyInputProps = {
     value: string;
     placeholder?: string;
     type?: string;
     required?: boolean;
     label: string;
     handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
     checkInputValueIsValid?: ((userInputValue: string) => boolean) | null;
     onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const MyInput = ({ handleChangeValue, value, placeholder, type, required, label, checkInputValueIsValid }: MyInputProps) => {
     //const [valueState, setValueState] = useState(value ? value : '');
     const [errorMessage, setErrorMessage] = useState('');
     const [isRequired, setIsRequired] = useState(required);
     //const inputRef = useRef<HTMLInputElement>(null);

     const checkAllFiledIsValid = (userInputValue: string) => {
          const isAllValueValid = checkInputValueIsValid ? checkInputValueIsValid(userInputValue) : true;
          if (isAllValueValid && value) {
               setErrorMessage('');
          } else {
               setErrorMessage('The pattern you entered is invalid');
          }
     };

     return (
          <div>
               {label}
               <Input
                    // ref={inputRef}
                    value={value}
                    onChange={e => {
                         handleChangeValue(e);
                    }}
                    onBlur={value => checkAllFiledIsValid(value.target.value)}
                    placeholder={placeholder}
                    type={type}
                    required={isRequired}
                    name={label}
               />
               {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          </div>
     );
};
export default MyInput;
