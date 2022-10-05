import ProductGrid from '../components/ProductGrid/ProductGrid';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { makeStyles } from '@material-ui/core/styles';
import MyCarousel from '../components/MyCarousel/MyCarousel';
import Image from '../components/MyCarousel/Image';
import ps5Image from '../assets/images/sony5.avif';
import microImage from '../assets/images/microware.avif';
import sonyTvImage from '../assets/images/sony_tv.avif';

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

  return (
    <div>
      <MyCarousel>
        <Image img={classes.img} src={ps5Image} altName={'test'} />
        <Image img={classes.img} src={microImage} altName={'test'} />
        <Image img={classes.img} src={sonyTvImage} altName={'test'} />
      </MyCarousel>
      <ProductGrid className={classes.grid} />
    </div>
  );
};
export default HomePage;
