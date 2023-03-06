import ps5Image from '../../assets/images/sony5.avif';
import microImage from '../../assets/images/microware.avif';
import sonyTvImage from '../../assets/images/sony_tv.avif';

export interface IMagesSlider {
  id: number;
  src: string;
  alt: string;
}

const Images: IMagesSlider[] = [
  {
    id: 1,
    src: ps5Image,
    alt: 'Image 1',
  },
  {
    id: 2,
    src: microImage,
    alt: 'Image 2 ',
  },
  {
    id: 3,
    src: sonyTvImage,
    alt: 'Image 3',
  },
  {
    id: 4,
    src: sonyTvImage,
    alt: 'Image 3',
  },
  {
    id: 5,
    src: 'https://cdn.pixabay.com/photo/2014/08/08/20/54/laundry-413688_1280.jpg',
    alt: 'Image 5',
  },
  {
    id: 6,
    src: 'https://cdn.pixabay.com/photo/2016/10/26/21/05/modern-kitchen-1772638_1280.jpg',
    alt: 'Image 6',
  },
];
export default Images;
