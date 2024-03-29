import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useStyles } from './useStyles';

export type ItemSliderProps = {
  src: string;
  alt: string;
  key: number;
  id: number;
};

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
