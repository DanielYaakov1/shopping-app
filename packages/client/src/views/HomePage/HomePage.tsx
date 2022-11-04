import DataGrid from '../../components/DataGrid/DataGrid';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Products from '../../components/Products/Products';
import { addItemToCart } from '../../store/slices/cartSlice';
import { useCallback, useEffect } from 'react';
import ProductsActions from '../../actions/ProductsActions';
import { setProduct } from '../../store/slices/ProductSlice';
import Images from '../../components/ImageSlider/Images';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ProductForm from '../ProductForm/ProductForm';

export const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: '380px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    objectFit: 'none',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const { isLoadingProducts, products } = useSelector((state: RootState) => state.productReducer);
  const dispatch = useDispatch();
  const { getAllProducts } = ProductsActions();

  const fetchProductAndPage = useCallback(async () => {
    const { products } = await getAllProducts();
    dispatch(setProduct(products));
    return products;
    //NOT adding getAllProducts to the dependencies enters a loop
  }, [dispatch]);

  const handleAddToCart1 = useCallback(
    (amount: string) => {
      dispatch(addItemToCart({ amount }));
      console.log('add to cart');
    },
    [dispatch]
  );

  //reference to a good function that should receive the values
  const handleAddToCart = useCallback(
    (productId: string, amount: string, price: number, name: string) => {
      debugger;
      dispatch(addItemToCart({ productId, amount, price, name }));
      debugger;
      console.log('add to cart');
    },
    [dispatch]
  );

  const handleAddToCart2 = useCallback(
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
          autoplaySpeed: 2000,
        }}
        images={Images}
      />
      {isLoadingProducts ? (
        <Spinner />
      ) : (
        <DataGrid>
          {products.length > 0 ? (
            <Products products={products} onAddToCartClicked={handleAddToCart}></Products>
          ) : (
            "There isn't Products"
          )}
        </DataGrid>
      )}
    </div>
  );
};
export default HomePage;

//<ProductForm onAddToCart={handleAddToCart2} id={'123'} />
