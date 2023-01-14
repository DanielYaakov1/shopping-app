import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '15vh',
    left: '5%',
    width: '90%',
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: 14,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    zIndex: 30,
    animation: 'slide-down 700ms ease-out forwards',
  },
});
export default useStyles;
