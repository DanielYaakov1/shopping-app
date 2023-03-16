import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TextField from '@mui/material/TextField';
import { useCallback, useMemo, useState } from 'react';
import { setProduct } from '../../store/slices/ProductSlice';
import ProductsActions from '../../actions/ProductsActions';
import { useDispatch, useSelector } from 'react-redux';
import useStyles, { appIcon, searchHeaderField } from './useStyles';
import { setCheckoutOpen } from '../../store/slices/orderSlice';
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
import AlertDialog from '../AlertDialog';
import RESOURCES from '../../resources';
import ActionsAuth from '../../actions/auth';
import IconButton from '@mui/material/IconButton';
import { ROUTES } from '../../utils/constants';

function AppNavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [searchProduct, setSearchProduct] = useState('');
  const { logoutFirebaseAction } = ActionsAuth();
  const { getAllProducts, getProductByName } = ProductsActions();
  const [open, setOpen] = useState(false);

  //card
  const { items, isCartModalOpen } = useSelector((state: RootState) => state.cartReducer);
  const displayOrderForm = useSelector((state: RootState) => state.orderReducer.isCheckoutOpen);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenuAndNavigate = async (dropDownListNumber: number) => {
    switch (dropDownListNumber) {
      case 0:
        history.replace('/profile');
        break;
      case 1:
        history.replace('/account');
        break;
      case 2:
        history.replace('/dashboard');
        break;
      case 3:
        setOpen(true);
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
        const searchResults = await getProductByName(searchValue);
        dispatch(setProduct(searchResults));
      } else {
        const { products } = await getAllProducts();
        dispatch(setProduct(products));
      }
    },
    [dispatch, getAllProducts, getProductByName]
  );

  const numberCartItem = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const handleCartModal = useCallback(
    () => dispatch(setCartModalOpen(!isCartModalOpen)),
    [dispatch, isCartModalOpen]
  );

  const handleCheckoutForm = useCallback(() => {
    dispatch(setCheckoutOpen(!displayOrderForm));
  }, [dispatch, displayOrderForm]);

  //open dialog
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = useCallback(async () => {
    await logoutFirebaseAction();
    setOpen(false);
  }, [logoutFirebaseAction]);

  const pages = useMemo(
    () => [
      { title: 'Products', urlPath: ROUTES.HOME_PAGE },
      { title: 'orders', urlPath: ROUTES.ORDERS },
      { title: 'about', urlPath: ROUTES.ABOUT },
    ],
    []
  );
  const handleCloseNavMenuAndNavigate = useCallback(
    (index: number) => {
      debugger;
      const routePath = pages[index].urlPath;
      if (routePath) {
        history.replace(routePath);
      }
      setAnchorElNav(null);
    },
    [history, pages]
  );

  return (
    <AppBar position="sticky" className={classes.headerNav}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href={ROUTES.HOME_PAGE} sx={appIcon}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            SP
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
              onClose={handleCloseNavMenuAndNavigate}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page, index) => (
                <MenuItem key={page.title} onClick={() => handleCloseNavMenuAndNavigate(index)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                href={page.urlPath}
                key={page.urlPath}
                onClick={() => handleCloseNavMenuAndNavigate(index)}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.title}
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
          <SettingsMenu
            menuDropDown={classes.menuDropDown}
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenuAndNavigate}
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
