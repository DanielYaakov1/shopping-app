import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProductByName } from '../../actions/ProductsAction';
import { RootState } from '../../store/store';
import MyInput from './MyInput';
import Products from './Products';
import Search from './Search';

const ProductList = () => {
     const productss = useSelector((state: RootState) => state.productReducer.products);

     const [search, setSearch] = useState('');
     const [products, setProducts] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState('');

     const handleSearch = async (value: string) => {
          setIsLoading(true);
          setError('');
          try {
               const products = await getProductByName(value);
               const productsJson = await products.json();
               console.log(productsJson);
               //setProducts(products);
               setIsLoading(false);
          } catch (err) {
               if (err instanceof Error) {
                    setError(err.message);
                    setIsLoading(false);
               }
          }
     };

     return (
          <div>
               {/* <MyInput value={search} placeholder='dave' label='typed here your shit!' handleChangeValue={e => setSearch(e.target.value)}></MyInput> */}
               {/* <Search placeholder='Search' value={'sss'}></Search> */}
               <Products></Products>
          </div>
     );
};

export default ProductList;
