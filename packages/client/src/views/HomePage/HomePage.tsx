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
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import ProductsActions from '../../actions/ProductsActions';
import { addProduct } from '../../store/slices/ProductSlice';
import Sorting from '../../components/Sorting';
import { SelectChangeEvent } from '@mui/material/Select';
import Filtering from '../../components/Filtering';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import { v4 as uuidv4 } from 'uuid';
import Cart from '../../components/Cart/Cart';
import { setCheckoutOpen } from '../../store/slices/orderSlice';
import { debounce } from 'lodash';

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
  const { getProductPerPage } = ProductsActions();
  const [isSortingOption, setIsSelectValue] = useState('');
  const [category, setCategory] = useState('');

  //infinite scroll logic
  const listInnerRef = useRef(null);
  const [currPage, setCurrPage] = useState(1); // storing current page number
  const [prevPage, setPrevPage] = useState(0); // storing prev page number
  const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list
  const [loadingFetchProducts, setLoadingFetchProducts] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      setLoadingFetchProducts(true);
      const res = await getProductPerPage(currPage, 5);
      if (!res.products.length) {
        setWasLastList(true);
        return;
      }
      setPrevPage(currPage);
      dispatch(addProduct(res.products));
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingFetchProducts(false);
    }
  }, [currPage, dispatch, getProductPerPage]);

  const onScroll = useCallback(() => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.abs(scrollTop + clientHeight - scrollHeight) < 1 && !wasLastList) {
        setCurrPage((currPage) => {
          return currPage + 1;
        });
      }
    }
  }, [wasLastList]);

  const sortedProducts = useMemo(() => {
    //logic for sorting includes search result
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

  const handleAddToCart = useCallback(
    (productId: string, amount: string, price: number, name: string) => {
      dispatch(addItemToCart({ productId, amount, price, name }));
      console.log('add to cart');
    },
    [dispatch]
  );

  //card logic + state & function
  const displayOrderForm = useSelector((state: RootState) => state.orderReducer.isCheckoutOpen);

  const { items, isCartModalOpen, totalAmount } = useSelector(
    (state: RootState) => state.cartReducer
  );

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

  useEffect(() => {
    let isMounted = true;
    const fetchData = debounce(async () => {
      if (!wasLastList && prevPage !== currPage && isMounted) {
        fetchProducts();
      }
    }, 1000);

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [currPage, wasLastList, prevPage, fetchProducts]);

  return (
    <div onScroll={onScroll} ref={listInnerRef} style={{ height: '100vh', overflowY: 'auto' }}>
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
          <div
            style={{
              marginTop: 40,
              marginLeft: 19,
            }}>
            <div style={{ marginBottom: 10 }}>
              <Filtering handleChange={(e) => setCategory(e.target.value)} value={category} />
            </div>
            <div>
              <Sorting
                isSortingOption={isSortingOption}
                handleSortingChange={handleSortingChange}
              />
            </div>
          </div>
          <div>
            <DataGrid>
              {products.length ? (
                <ProductsDetailsCard
                  products={sortedProducts}
                  onAddToCartClicked={handleAddToCart}
                />
              ) : (
                "There isn't Products"
              )}
            </DataGrid>
            {wasLastList && (
              <div
                style={{
                  textAlign: 'center',
                  padding: 16,
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: '#999',
                }}>
                End of list
              </div>
            )}
          </div>
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          textAlign: 'center',
        }}>
        {loadingFetchProducts && <Spinner />}
      </div>
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
