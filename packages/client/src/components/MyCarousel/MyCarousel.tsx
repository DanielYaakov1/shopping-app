import { memo } from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export type Props = {
  children?: any;
  key?: CarouselProps | undefined;
};

const MyCarousel = memo(({ children }: Props) => {
  return (
    <Carousel
      infiniteLoop
      useKeyboardArrows
      transitionTime={1000}
      showThumbs={false}
      showArrows={true}>
      {children}
    </Carousel>
  );
});
export default MyCarousel;
