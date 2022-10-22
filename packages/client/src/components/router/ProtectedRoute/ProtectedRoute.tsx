import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../../../views/HomePage/HomePage';
import Login from '../../../views/LoginPage/Login';
import PageNotFound from '../../../views/PageNotFound/PageNotFound';
import Header from '../../Header/Header';
import Order from '../../../views/Orders/OrderPage/OrderPage';

export const LoggedInRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route exact path={'/login'}>
          <Redirect to={'/'} />
        </Route>
        <Route exact path={'/Orders'}>
          <Order />
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
      </Switch>
    </>
  );
};
