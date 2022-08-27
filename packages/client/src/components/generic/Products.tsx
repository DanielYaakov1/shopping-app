import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction, getProductByName } from '../../actions/ProductsAction';
import { addProduct, setProduct } from '../../store/slices/ProductSlice';
import { RootState } from '../../store/store';
import { Input } from './Input';
import Product, { IProductProps } from './Product';
import { SelectChangeEvent } from '@mui/material/Select';
import { Sorting } from './Sorting';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productReducer.products);
  const [searchProduct, setSearchProduct] = useState('');
  const [isSortingOption, setIsSelectValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  //
  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         const products = await getAllProductsAction();
  //         //dispatch(setProduct(products));
  //       } catch (err) {
  //         console.log(err, 'this is the error');
  //       }
  //     };
  //     fetchProducts();
  //   }, [dispatch]);

  const handleClearSearch = useCallback(async () => {
    //function to restart search state value
    setSearchProduct('');
  }, [setSearchProduct]);

  const sortedProducts = useMemo(() => {
    //logic for sorting includes search result
    return [...(searchProduct ? searchResults : products)].sort((firstNum, lastNum) => {
      if (isSortingOption === 'priceLow') {
        return firstNum.price - lastNum.price;
      }
      if (isSortingOption === 'priceHigh') {
        return lastNum.price - firstNum.price;
      }
      if (isSortingOption === 'nameAsc') {
        return firstNum.name.localeCompare(lastNum.name);
      }
      if (isSortingOption === 'nameDesc') {
        return lastNum.name.localeCompare(firstNum.name);
      }
      return 0;
    });
  }, [searchProduct, searchResults, products, isSortingOption]);

  const search = useCallback(
    //Input value + function to backend to fetch product by name
    async (searchValue: string) => {
      try {
        const searchResults = await getProductByName(searchValue);
        if (searchResults) {
          setSearchResults(searchResults);
        } else {
          setSearchResults([]);
        }
      } catch (err) {
        console.log(err, 'search error');
      }
    },
    [setSearchResults]
  );
  const handleSetSearch = useCallback(
    //handle search if filed is empty display previous products
    async (searchValue: string) => {
      setSearchProduct(searchValue);
      if (searchValue.length > 0) {
        search(searchValue);
      } else {
        //const getAllProducts = await getAllProductsAction();
        //dispatch(setProduct(getAllProducts));
        dispatch(setProduct(products));
      }
    },
    [dispatch, products, search]
  );

  const handleSortingChange = useCallback(
    //get sorting value and set state
    async (event: SelectChangeEvent) => {
      setIsSelectValue(event.target.value);
    },
    [setIsSelectValue]
  );

  return (
    <div>
      <Input searchProduct={searchProduct} setSearchProduct={handleSetSearch}></Input>
      <button onClick={handleClearSearch}>Clear</button>
      <Sorting isSortingOption={isSortingOption} handleSortingChange={handleSortingChange}></Sorting>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '10px',
        }}
      >
        {sortedProducts.map((product: IProductProps, i: number) => (
          <Product
            key={i}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            id={i}
          ></Product>
        ))}
      </div>
    </div>
  );
};
export default Products;
