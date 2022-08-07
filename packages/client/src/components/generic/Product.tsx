import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';

export const useStyles = makeStyles(theme => ({
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
     image: {
          width: '75%',
          height: '60%',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '5px',
          marginBottom: '1rem',
     },
     title: {
          color: theme.palette.primary.light,
     },
     description: {
          color: theme.palette.primary.light,
     },
     price: {
          color: theme.palette.primary.light,
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
          <Card>
               <div style={{}}>
                    <h3 className={classes.title}>Name: {name}</h3>
                    <p className={classes.description}>Description: {description}</p>
                    <p className={classes.description}>Price: {price}</p>
                    <div>
                         <img className={classes.image} src={image} alt={name} />
                    </div>
               </div>
          </Card>
     );
};
export default Product;
