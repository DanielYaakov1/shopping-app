import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  shipToContainer: {
    position: 'relative',
  },
  shipToArrow: {
    position: 'absolute',
    top: -8,
    left: '68.2%',
    transform: 'translateX(-50%) rotate(45deg)',
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderBottom: 'none',
    borderRight: 'none',
    zIndex: 1,
  },

  shipToContext: {
    position: 'absolute',
    left: '67%',
    transform: 'translateX(-40%)',
    padding: 16,
    border: '1px solid #ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    maxWidth: 500,
    marginTop: 2,
  },
});

export default useStyles;
