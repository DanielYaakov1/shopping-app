import { memo } from 'react';

export type CardProps = {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Card = memo(({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
});
export default Card;
