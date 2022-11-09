import { memo } from 'react';

export type IInputProps = {
  searchProduct: string;
  setSearchProduct: (value: string) => void;
  className?: string;
  type: string;
  placeholder?: string;
};

const Input = memo(({ searchProduct, setSearchProduct, type, placeholder }: IInputProps) => {
  return (
    <input
      style={{
        width: '30%',
        height: '30px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '5px',
        margin: '10px',
        fontSize: '20px',
        color: '#000',
        backgroundColor: '#fff',
        textAlign: 'center',
        letterSpacing: '1px',
      }}
      type={type}
      placeholder={placeholder}
      value={searchProduct}
      onChange={(e) => setSearchProduct(e.target.value)}
    ></input>
  );
});

export default Input;
