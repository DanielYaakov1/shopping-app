import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../../../pages/HomePage';
import Login from '../../../pages/Login';
import PageNotFound from '../../../pages/PageNotFound';
import Header from '../../generic/Header';

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
