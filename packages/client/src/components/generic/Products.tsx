import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction, getProductByName } from '../../actions/ProductsAction';
import { addProduct, setProduct } from '../../store/slices/ProductSlice';
import { RootState } from '../../store/store';
import { Input } from './Input';
import MyButton from './MyButton';
import MySelected from './MySelected';
import Product, { IProductProps } from './Product';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productReducer.products);
  const [searchProduct, setSearchProduct] = useState('');
  const [isSortingOption, setIsSelectValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  const clearSearch = useCallback(async () => {
    setSearchProduct('');
  }, [setSearchProduct]);

  const sortedProducts = useMemo(() => {
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

  const handleSortingChange = useCallback(async (event: SelectChangeEvent) => {
    setIsSelectValue(event.target.value);
  }, []);

  return (
    <div>
      <Input searchProduct={searchProduct} setSearchProduct={handleSetSearch}></Input>
      <button onClick={clearSearch}>Clear</button>
      <FormControl style={{ minWidth: '20%' }}>
        <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={isSortingOption}
          onChange={handleSortingChange}
          label="Filter"
        >
          <MenuItem value="">
            <div>
              <em>None</em>
            </div>
          </MenuItem>
          <MenuItem value="priceLow">
            <div>Price lowest first</div>
          </MenuItem>
          <MenuItem value="priceHigh">
            <div>Price highest first</div>
          </MenuItem>
          <MenuItem value="nameAsc">
            <div>Sort A-Z</div>
          </MenuItem>
          <MenuItem value="nameDesc">
            <div>Sort Z-A</div>
          </MenuItem>
        </Select>
      </FormControl>

      {/* <MyButton onClick={clearSearch} label={'clear'}></MyButton> */}
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
