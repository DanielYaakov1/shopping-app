import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from './Item';

export function SamplePrevArrow(props: any) {
     const { className, style, onClick } = props;
     console.log('SamplePrevArrow', props);
     return <div className={className} style={{ ...style, display: 'block', background: 'green', left: '10%' }} onClick={onClick} />;
}
export function SampleNextArrow(props: any) {
     const { className, style, onClick } = props;
     return <div className={className} style={{ ...style, display: 'block', background: 'red', left: '90%' }} onClick={onClick} />;
}

const Carousel = () => {
     const [nav1, setNav1] = useState();
     const [nav2, setNav2] = useState();
     const slider1 = useRef();
     const slider2 = useRef();

     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: <SamplePrevArrow />,
          nextArrow: <SampleNextArrow />,
          // autoplay: true,
          // autoplaySpeed: 3000,
          // pauseOnHover: true,
     };
     return (
          <div style={{ textAlign: 'center' }}>
               <Slider {...settings}>
                    <div>
                         <Item name='Item 1' description='This is item 1' price={100} image='https://media.istockphoto.com/photos/white-wireless-overhead-monitor-headphones-lie-on-a-dark-foam-rubber-picture-id1232354934?s=612x612' />
                    </div>
                    <div>
                         <Item name='Item 2' description='This is item 2' price={200} image='https://media.istockphoto.com/photos/white-wireless-overhead-monitor-headphones-lie-on-a-dark-foam-rubber-picture-id1232354934?s=612x612' />
                    </div>
                    <div>
                         <Item name='Item 3' description='This is item 3' price={300} image='https://media.istockphoto.com/photos/white-wireless-overhead-monitor-headphones-lie-on-a-dark-foam-rubber-picture-id1232354934?s=612x612' />
                    </div>
               </Slider>
          </div>
     );
};

export default Carousel;

//{ className: string; style: object; onClick: () => void }
