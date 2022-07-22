export type ItemProps = {
     className?: string;
     style?: object;
     onClick?: () => void;
     name: string;
     description: string;
     image: string;
     price: number;
};

const Item = ({ name, description, price, image }: ItemProps) => {
     return (
          <div>
               <h3>{name}</h3>
               <p>{description}</p>
               <p>{price}</p>
               <img
                    style={{
                         maxWidth: '30%',
                         maxHeight: '30%',
                         margin: 'auto',
                         display: 'block',
                    }}
                    src={image}
                    alt={name}
               />
          </div>
     );
};
export default Item;
