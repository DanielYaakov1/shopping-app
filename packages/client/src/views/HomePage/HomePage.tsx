import DataGrid from '../../components/DataGrid/DataGrid';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductsDetailsCard from '../../components/ProductsDetailsCard';
import {
  addItemToCart,
  deleteItemFromCart,
  IItems,
  setCartModalOpen,
} from '../../store/slices/cartSlice';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ProductsActions from '../../actions/ProductsActions';
import { setProduct } from '../../store/slices/ProductSlice';
import Images from '../../components/ImageSlider/Images';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Sorting from '../../components/Sorting';
import { SelectChangeEvent } from '@mui/material/Select';
import Filtering from '../../components/Filtering';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import { v4 as uuidv4 } from 'uuid';
import Cart from '../../components/Cart/Cart';
import { checkGreaterNumberInArray } from '../../utils/helpers/array.helpers';
import { setCheckoutOpen } from '../../store/slices/orderSlice';

const slides = [
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/801/?random" alt="1" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/802/?random" alt="2" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/600/803/?random" alt="3" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/804/?random" alt="5" />,
  },
];

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

  //card logic + state & function
  const displayOrderForm = useSelector((state: RootState) => state.orderReducer.isCheckoutOpen);

  const { items, isCartModalOpen, totalAmount } = useSelector(
    (state: RootState) => state.cartReducer
  );
  const checkIfTheCardIsEmpty = useCallback(() => checkGreaterNumberInArray(items, 0), [items]);

  const handleIncreaseItem = useCallback(
    (item: IItems) => dispatch(addItemToCart({ ...item, amount: 1 })),
    [dispatch]
  );

  const handleDecreaseItem = useCallback(
    (id: string) => dispatch(deleteItemFromCart(id)),
    [dispatch]
  );

  const handleCheckoutForm = useCallback(() => {
    dispatch(setCheckoutOpen(!displayOrderForm));
  }, [dispatch, displayOrderForm]);

  const handleCartModal = useCallback(
    () => dispatch(setCartModalOpen(!isCartModalOpen)),
    [dispatch, isCartModalOpen]
  );

  return (
    <div>
      <div style={{ width: '100%', height: '400px', margin: '10px 10px' }}>
        <Carousel
          slides={slides}
          offsetRadius={2}
          goToSlide={0}
          showNavigation={true}
          animationConfig={config.gentle}
        />
      </div>
      {isLoadingProducts ? (
        <Spinner />
      ) : (
        <div>
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
      <Cart
        items={items}
        isCartModalOpen={isCartModalOpen}
        totalAmount={totalAmount}
        displayOrderForm={displayOrderForm}
        handleIncreaseItem={handleIncreaseItem}
        handleDecreaseItem={handleDecreaseItem}
        handleCartModal={handleCartModal}
        handleCheckoutForm={handleCheckoutForm}
      />
    </div>
  );
};
export default HomePage;
