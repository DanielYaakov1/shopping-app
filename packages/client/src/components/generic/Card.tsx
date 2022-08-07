import { makeStyles } from '@mui/styles';

export type CardProps = {
     className?: string;
     onClick?: () => void;
     children: React.ReactNode;
};
export const useStyles = makeStyles({
     root: {
          maxWidth: '30%',
          margin: '0 auto',
          border: '1px solid #ccc',
          boxShadow: '0 0 5px #ccc',
          textAlign: 'center',
          marginBottom: '1rem',
     },
});

const Card = ({ children }: CardProps) => {
     const classes = useStyles();
     return <div className={classes.root}>{children}</div>;
};
export default Card;
