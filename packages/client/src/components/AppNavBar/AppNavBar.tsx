import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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
import { useHistory } from 'react-router-dom';
import SettingsMenu from '../SettingsMenu';
import { pages } from '../../utils/constants/navBarData';
import AlertDialog from '../AlertDialog';
import RESOURCES from '../../resources';
import ActionsAuth from '../../actions/auth';

function AppNavBar() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [searchProduct, setSearchProduct] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { logoutFirebaseAction } = ActionsAuth();

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

  const handleCloseUserMenu = async (dropDownListNumber: number) => {
    console.log('event from dropdown', dropDownListNumber);
    switch (dropDownListNumber) {
      case 0:
        console.log('case for profile');
        history.replace('/logisssn');
        break;
      case 1:
        history.replace('/wes');
        console.log('case for logout');
        break;
      case 2:
        history.replace('/loasssn');
        console.log('case for logout');
        break;
      case 3:
        setOpen(true);
        console.log('case for logout');
        break;
      default:
        break;
    }
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

  //dialog open
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = async () => {
    await logoutFirebaseAction();
    setOpen(false);
  };
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
          <SettingsMenu
            menuDropDown={classes.menuDropDown}
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
          />
        </Toolbar>
      </Container>
      <AlertDialog
        open={open}
        titleDialog={RESOURCES.ALERT_TITLE_TEXT}
        bodyDialog={RESOURCES.LOGOUT_ALERT_BODY_TEXT}
        handleClickOpen={handleClickOpen}
        handleCancelAction={handleClose}
        handleApprovedAction={handleLogout}
      />
    </AppBar>
  );
}
export default AppNavBar;
