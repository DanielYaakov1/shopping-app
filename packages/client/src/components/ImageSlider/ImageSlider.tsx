import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { makeStyles } from '@material-ui/core/styles';

export type ItemSliderProps = {
  src: string;
  alt: string;
  key: number;
  id: number;
};

export const useStyles = makeStyles((theme) => ({
  imgSlider: {
    '& img': {
      height: 500,
      width: '100%',
      backgroundSize: 'contain',
    },
  },
}));
export type ImageSliderProps = {
  images: any;
  settings: any;
};

const ImageSlider = ({ images, settings }: ImageSliderProps) => {
  const classes = useStyles();
  return (
    <div className={classes.imgSlider}>
      <Slider {...settings}>
        {images.map((item: ItemSliderProps, index: number) => (
          <div key={index}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
