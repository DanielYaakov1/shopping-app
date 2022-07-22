export const getValidationFunction = (type: 'email' | 'name' | 'password'): ((typeValidation: string) => boolean) | null => {
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
     var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
     return emailRegex.test(email);
};

export const checkNotNumbersOrSpecialCharacters = (props: any) => {
     return !/[\d+/-]/g.test(props) && props !== '';
};

export const checkPasswordIsValid = (password: string): boolean => {
     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
     return passwordRegex.test(password) && password !== '';
};
