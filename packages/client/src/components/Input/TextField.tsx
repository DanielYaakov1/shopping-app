import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
  validate: (value: string) => boolean;
}

const ValidatedTextField = ({ label, value, setValue, validate }: Props) => {
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (validate(value)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      error={error}
      helperText={error ? 'Invalid value' : ''}
    />
  );
};

export default ValidatedTextField;
