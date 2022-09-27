import ProductGrid from '../components/ProductGrid/ProductGrid';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: '380px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    objectFit: 'none',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Carousel infiniteLoop useKeyboardArrows transitionTime={1000} showThumbs={false} showArrows={true}>
          <div>
            <img
              className={classes.img}
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="a"
            />
          </div>
          <div>
            <img
              className={classes.img}
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="b"
            />
          </div>
          <div>
            <img
              className={classes.img}
              src="https://images.unsplash.com/photo-1648475238015-afae3557968a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="c"
            />
          </div>
        </Carousel>
      </div>

      <ProductGrid />
    </div>
  );
};
export default HomePage;
