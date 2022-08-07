import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction, getProductByName } from '../../actions/ProductsAction';
import { addProduct, setProduct } from '../../store/slices/ProductSlice';
import { RootState } from '../../store/store';
import { Input } from './Input';
import MyButton from './MyButton';
import Product, { ProductProps } from './Product';

const Products = () => {
     const dispatch = useDispatch();
     const products = useSelector((state: RootState) => state.productReducer.products);
     const [searchProduct, setSearchProduct] = useState('');
     const clearSearch = () => setSearchProduct('');

     useEffect(() => {
          const fetchProducts = async () => {
               try {
                    const products = await getAllProductsAction();
                    dispatch(setProduct(products));
               } catch (err) {
                    console.log(err, 'this is the error');
               }
          };
          fetchProducts();
     }, [dispatch]);

     //NOTE: filter the products by name and return the new array - it will not change the original array (products)
     const productsFilteredByName = () => {
          let newProductsFilterArray = [];
          newProductsFilterArray = products.filter((product: ProductProps) => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
          return newProductsFilterArray;
     };
     return (
          <div>
               <Input searchProduct={searchProduct} setSearchProduct={setSearchProduct}></Input>
               {/* <MyButton label={'Clear'} onClick={clearSearch} type={'button'}></MyButton> */}
               <button onClick={clearSearch}>clear</button>
               <div
                    style={{
                         display: 'flex',
                         flexWrap: 'wrap',
                         marginTop: '10px',
                    }}>
                    {productsFilteredByName().map((product: ProductProps, i: number) => (
                         <Product key={i} name={product.name} price={product.price} image={product.image} description={product.description}></Product>
                    ))}
                    {/* {productsFiltered().map((product: ProductProps, i: number) => (
                    <Product key={i} name={product.name} price={product.price} image={product.image} description={product.description}></Product>
               ))} */}
               </div>
          </div>
     );
};
export default Products;
