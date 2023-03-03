import DataGrid from '../../components/DataGrid/DataGrid';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductsDetailsCard from '../../components/ProductsDetailsCard';
import { addItemToCart } from '../../store/slices/cartSlice';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ProductsActions from '../../actions/ProductsActions';
import { setProduct } from '../../store/slices/ProductSlice';
import Images from '../../components/ImageSlider/Images';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Sorting from '../../components/Sorting';
import { SelectChangeEvent } from '@mui/material/Select';
import Filtering from '../../components/Filtering';

const HomePage = () => {
  const { isLoadingProducts, products } = useSelector((state: RootState) => state.productReducer);
  const dispatch = useDispatch();
  const { getAllProducts } = ProductsActions();
  const [isSortingOption, setIsSelectValue] = useState('');
  const [category, setCategory] = useState('');

  const sortedProducts = useMemo(() => {
    //logic for sorting includes search result
    //return [...(searchProduct ? searchResults : products)].sort((firstNum, lastNum) => {
    return [...products]
      .filter((product) => product.category.includes(category))
      .sort((a, b) => {
        if (isSortingOption === 'priceLow') {
          return a.price - b.price || a.name.localeCompare(b.name);
        }
        if (isSortingOption === 'priceHigh') {
          return b.price - a.price || a.name.localeCompare(b.name);
        }
        if (isSortingOption === 'nameAsc') {
          return a.name.localeCompare(b.name) || a.price - b.price;
        }
        if (isSortingOption === 'nameDesc') {
          return b.name.localeCompare(a.name) || a.price - b.price;
        }
        return 0;
      });
  }, [products, isSortingOption, category]);

  const handleSortingChange = useCallback(
    //get sorting value and set state
    async (event: SelectChangeEvent) => {
      setIsSelectValue(event.target.value);
    },
    [setIsSelectValue]
  );

  const fetchProductAndPage = useCallback(async () => {
    const { products } = await getAllProducts();
    dispatch(setProduct(products));
    return products;
  }, [dispatch, getAllProducts]);

  const handleAddToCart = useCallback(
    (productId: string, amount: string, price: number, name: string) => {
      dispatch(addItemToCart({ productId, amount, price, name }));
      console.log('add to cart');
    },
    [dispatch]
  );
  useEffect(() => {
    fetchProductAndPage();
  }, [fetchProductAndPage]);
  return (
    <div>
      <ImageSlider
        settings={{
          infinite: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
          autoplay: true,
          autoplaySpeed: 5000,
        }}
        images={Images}
      />
      {isLoadingProducts ? (
        <Spinner />
      ) : (
        <div
          style={{
            margin: '5px',
          }}>
          <Filtering handleChange={(e) => setCategory(e.target.value)} value={category} />
          <Sorting isSortingOption={isSortingOption} handleSortingChange={handleSortingChange} />
          <DataGrid>
            {products.length ? (
              <ProductsDetailsCard products={sortedProducts} onAddToCartClicked={handleAddToCart} />
            ) : (
              "There isn't Products"
            )}
          </DataGrid>
        </div>
      )}
    </div>
  );
};
export default HomePage;
