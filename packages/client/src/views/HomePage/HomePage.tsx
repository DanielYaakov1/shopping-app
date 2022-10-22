import ProductGrid from '../../components/ProductGrid/ProductGrid';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { makeStyles } from '@material-ui/core/styles';
import MyCarousel from '../../components/MyCarousel/MyCarousel';
import Image from '../../components/MyCarousel/Image';
import ps5Image from '../../assets/images/sony5.avif';
import microImage from '../../assets/images/microware.avif';
import sonyTvImage from '../../assets/images/sony_tv.avif';
import Spinner from '../../components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Products from '../../components/Products/Products';

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
  const isLoadingProducts = useSelector((state: RootState) => state.productReducer.isLoading);
  const products = useSelector((state: RootState) => state.productReducer.products);
  console.log(isLoadingProducts);

  return (
    <div>
      <MyCarousel>
        <Image img={classes.img} src={ps5Image} altName={'test'} />
        <Image img={classes.img} src={microImage} altName={'test'} />
        <Image img={classes.img} src={sonyTvImage} altName={'test'} />
      </MyCarousel>
      {!isLoadingProducts ? (
        <ProductGrid className={classes.grid}>
          {products.length > 0 ? <Products products={products} /> : "There isn't Products"}
        </ProductGrid>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default HomePage;
