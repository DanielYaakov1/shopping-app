export const getValidationFunction = (
  type: 'email' | 'name' | 'password'
): ((typeValidation: string) => boolean) | null => {
  let validationFunction: ((typeValidation: string) => boolean) | null;

  switch (type) {
    case 'email':
      validationFunction = checkEmailIsValid;
      break;

    case 'name':
      validationFunction = checkNotNumbersOrSpecialCharacters;
      break;
    case 'password':
      validationFunction = checkPasswordIsValid;
      break;

    default:
      validationFunction = null;
      break;
  }

  return validationFunction;
};

export const checkEmailIsValid = (email: string): boolean => {
  const emailRegex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/;
  return emailRegex.test(email);
};

export const checkNotNumbersOrSpecialCharacters = (props: string): boolean => {
  return !/[\d+/-]/g.test(props) && props !== '';
};

export const checkPasswordIsValid = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password) && password !== '';
};

export const checkNotCharacters = (props: string): boolean => {
  const CharactersRegex = /^\d+$/;
  return CharactersRegex.test(props) && props !== '';
};

export const isObjectStringsAndNonEmpty = (obj: any): boolean => {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string' && value.trim() === '') {
      return false;
    }
  }
  return true;
};

export const isEmptyField = (value: any): boolean => {
  return value === null || value === undefined || value === '';
};

export const isAddressValid = (address: any): boolean => {
  //TODO: Import address state from redux
  const { city, zip, lastName, firstName } = address;
  return (
    city.trim() !== '' && zip.trim() !== '' && lastName.trim() !== '' && firstName.trim() !== ''
  );
};
