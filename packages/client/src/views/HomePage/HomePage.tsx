import DataGrid from '../../components/DataGrid/DataGrid';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductsDetailsCard from '../../components/ProductsDetailsCard';
import { addItemToCart } from '../../store/slices/cartSlice';
import { useCallback, useEffect } from 'react';
import ProductsActions from '../../actions/ProductsActions';
import { setProduct } from '../../store/slices/ProductSlice';
import Images from '../../components/ImageSlider/Images';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const HomePage = () => {
  const { isLoadingProducts, products } = useSelector((state: RootState) => state.productReducer);
  const dispatch = useDispatch();
  const { getAllProducts } = ProductsActions();

  const fetchProductAndPage = useCallback(async () => {
    const { products } = await getAllProducts();
    dispatch(setProduct(products));
    return products;
    //NOT adding getAllProducts to the dependencies enters a loop
  }, [dispatch]);

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
          autoplaySpeed: 2000,
        }}
        images={Images}
      />
      {isLoadingProducts ? (
        <Spinner />
      ) : (
        <DataGrid>
          {products.length > 0 ? (
            <ProductsDetailsCard
              products={products}
              onAddToCartClicked={handleAddToCart}></ProductsDetailsCard>
          ) : (
            "There isn't Products"
          )}
        </DataGrid>
      )}
    </div>
  );
};
export default HomePage;
