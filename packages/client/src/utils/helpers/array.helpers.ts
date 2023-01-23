export const checkGreaterOrEqualNumberInArray = (array: any, number: number) =>
  array.length >= number;
export const checkLessNumberInArray = (array: any, number: number) => array.length < number;
export const checkLessOrEqualNumberInArray = (array: any, number: number) => array.length <= number;
export const checkGreaterNumberInArray = (array: any, number: number) => array.length > number;

export const generateObjectArrayFromStrings = (stringArray: string[]) => {
  const objectArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    objectArray.push({ key: i, value: stringArray[i] });
  }
  return objectArray;
};
