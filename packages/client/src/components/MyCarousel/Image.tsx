import { memo } from 'react';

export type props = {
  img: string;
  src: string;
  altName: string;
};

const Image = memo(({ img, src, altName }: props) => {
  return <img className={img} src={src} alt={altName} />;
});

export default Image;
