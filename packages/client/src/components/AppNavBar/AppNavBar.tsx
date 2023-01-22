import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TextField from '@mui/material/TextField';
import { useCallback, useState } from 'react';
import { setProduct } from '../../store/slices/ProductSlice';
import ProductsActions from '../../actions/ProductsActions';
import { useDispatch, useSelector } from 'react-redux';
import useStyles, { appIcon, searchHeaderField } from './useStyles';
import MyModal from '../MyModal';
import Cart from '../Cart';
import { setCheckoutOpen } from '../../store/slices/orderSlice';
import OrderForm from '../../views/Orders/OrderForm/OrderForm';
import { RootState } from '../../store';
import {
  addItemToCart,
  deleteItemFromCart,
  IItems,
  setCartModalOpen,
} from '../../store/slices/cartSlice';
import { checkGreaterNumberInArray } from '../../utils/helpers/array.helpers';
import CartIcon from '../CartIcon';

const pages = ['Products', 'orders', 'about'];
const settings = ['Profile','Account','Dashboard','Logout'];
// const settings = [
//   {
//     logout: 'Logout',
//   },
//   {
//     profile: 'Profile',
//   },
// ];

function AppNavBar() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [searchProduct, setSearchProduct] = useState('');
  const dispatch = useDispatch();
  const { getAllProducts, getProductByName } = ProductsActions();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = ( ) => {
    setAnchorElUser(null);
  };

  const handleSetSearch = useCallback(
    async (searchValue: string) => {
      setSearchProduct(searchValue);
      if (searchValue.length > 0) {
        //search(searchValue);
        const searchResults = await getProductByName(searchValue);
        dispatch(setProduct(searchResults));
      } else {
        const { products } = await getAllProducts();
        dispatch(setProduct(products));
      }
    },
    [dispatch, getAllProducts, getProductByName]
  );

  //card
  const { items, isCartModalOpen, totalAmount } = useSelector(
    (state: RootState) => state.cartReducer
  );
  const displayOrderForm = useSelector((state: RootState) => state.orderReducer.isCheckoutOpen);
  const checkIfTheCardIsEmpty = useCallback(() => checkGreaterNumberInArray(items, 0), [items]);
  const handleIncreaseItem = useCallback(
    (item: IItems) => dispatch(addItemToCart({ ...item, amount: 1 })),
    [dispatch]
  );
  const handleDecreaseItem = useCallback(
    (id: string) => dispatch(deleteItemFromCart(id)),
    [dispatch]
  );
  const numberCartItem = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const handleCartModal = useCallback(
    () => dispatch(setCartModalOpen(!isCartModalOpen)),
    [dispatch, isCartModalOpen]
  );

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="/" sx={appIcon}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                href={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box component="form" sx={searchHeaderField} noValidate autoComplete="off">
            <TextField
              value={searchProduct}
              onChange={(e) => handleSetSearch(e.target.value)}
              id="outlined-basic"
              label="Search"
              variant="outlined"
            />
          </Box>
          <CartIcon numberCartItem={numberCartItem} onClick={handleCartModal} />
          <MyModal closeBtnName="X" isModalOpen={isCartModalOpen} onClose={handleCartModal}>
            <Cart
              items={items}
              totalAmount={totalAmount}
              checkIfTheCardIsEmpty={checkIfTheCardIsEmpty}
              handleIncreaseItem={handleIncreaseItem}
              handleDecreaseItem={handleDecreaseItem}
              labelButtonCheckout={'CHECK OUT'}
              onClickCheckOutButton={() => {
                dispatch(setCheckoutOpen(true));
              }}
            />
            {displayOrderForm && <OrderForm />}
          </MyModal>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              className={classes.menuDropDown}
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppNavBar;
