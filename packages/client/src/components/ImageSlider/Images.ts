import ps5Image from '../../assets/images/sony5.avif';
import microImage from '../../assets/images/microware.avif';
import sonyTvImage from '../../assets/images/sony_tv.avif';

export interface IMagesSlider {
  id: number;
  src: string;
  alt: string;
}

const Images: any = [
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
];
export default Images;
