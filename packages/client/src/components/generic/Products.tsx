import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction, getProductByName, getProductByName1 } from '../../actions/ProductsAction';
import { addProduct, setProduct } from '../../store/slices/ProductSlice';
import { RootState } from '../../store/store';
import Product, { ProductProps } from './Product';

const Products = () => {
     const dispatch = useDispatch();
     const products = useSelector((state: RootState) => state.productReducer.products);
     const [searchProduct, setSearchProduct] = useState('');

     //getProductByName('PS1231235');
     //getProductByName1();

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

     //NOTE: this is a filter - it will return a new array with the filtered products - it will not change the original array (products)
     const newProductsFilterArray = products.filter((product: ProductProps) => product.name.includes('tv'));

     const productsFiltered = () => {
          let newProductsFilterArray = [];
          newProductsFilterArray = products.filter((product: ProductProps) => product.name.toLowerCase().includes('tv'));
          console.log(newProductsFilterArray, 'this is the newProductsFilterArray');
          return newProductsFilterArray;
     };

     //NOTE: filter the products by name and return the new array - it will not change the original array (products)
     const productsFilteredByName = () => {
          let newProductsFilterArray = [];
          newProductsFilterArray = products.filter((product: ProductProps) => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
          console.log(newProductsFilterArray, 'this is the newProductsFilterArray');
          return newProductsFilterArray;
     };

     return (
          <div>
               <input
                    style={{
                         width: '50%',
                         height: '40px',
                         border: '1px solid #ccc',
                    }}
                    type='text'
                    placeholder='search'
                    value={searchProduct}
                    onChange={e => setSearchProduct(e.target.value)}></input>
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
