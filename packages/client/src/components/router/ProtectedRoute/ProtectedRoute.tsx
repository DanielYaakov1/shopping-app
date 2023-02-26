import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../../../views/HomePage';
import Login from '../../../views/LoginPage';
import PageNotFound from '../../../views/PageNotFound/PageNotFound';
import Orders from '../../../views/Orders/OrderPage/OrderPage';
import AppNavBar from '../../AppNavBar/AppNavBar';
import Checkout from '../../Checkout/Checkout';

export const LoggedInRouter = () => {
  return (
    <>
      <AppNavBar />
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route exact path={'/login'}>
          <Redirect to={'/'} />
        </Route>
        <Route exact path={'/Orders'}>
          <Orders />
        </Route>
        <Route exact path={'/checkout'}>
          <Checkout />
        </Route>
        <Route exact path={'*'}>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export const PublicRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path={'/login'}>
          <Login />
        </Route>
        <Route exact path={'*'}>
          <Redirect to={'/login'} />
        </Route>
      </Switch>
    </>
  );
};
