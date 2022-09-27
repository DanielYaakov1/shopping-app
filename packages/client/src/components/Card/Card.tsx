export type CardProps = {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Card = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
};
export default Card;
