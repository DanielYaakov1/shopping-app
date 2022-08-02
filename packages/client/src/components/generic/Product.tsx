import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
     root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
     },
     gridList: {
          width: '100%',
          height: '100%',
     },
}));

export type ProductProps = {
     className?: string;
     onClick?: () => void;
     name: string;
     description?: string;
     image?: string;
     price: number;
     _id?: string;
};

const Product = ({ name, description, price, image }: ProductProps) => {
     const classes = useStyles();

     return (
          <div
               style={{
                    maxWidth: '30%',
                    margin: '0 auto',
                    border: '1px solid #ccc',
                    boxShadow: '0 0 5px #ccc',
                    textAlign: 'center',
                    marginBottom: '1rem',
               }}>
               <h3>Name: {name}</h3>
               <p>Description: {description}</p>
               <p>Price: {price}</p>
               <img
                    style={{
                         width: '75%',
                         height: '60%',
                         objectFit: 'cover',
                         objectPosition: 'center',
                         borderRadius: '5px',
                         marginBottom: '1rem',
                    }}
                    src={image}
                    alt={name}
               />
          </div>
     );
};
export default Product;
