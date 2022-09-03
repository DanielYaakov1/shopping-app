import { memo } from 'react';

const Input = memo((props: { searchProduct: string; setSearchProduct: (value: string) => void }) => {
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
      type="text"
      placeholder="search"
      value={props.searchProduct}
      onChange={(e) => props.setSearchProduct(e.target.value)}
    ></input>
  );
});

export default Input;
