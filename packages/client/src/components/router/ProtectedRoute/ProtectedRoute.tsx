import React, { PropsWithChildren, ReactNode } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../../../pages/HomePage';
import Login from '../../../pages/Login';
import PageNotFound from '../../../pages/PageNotFound';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Header from '../../generic/Header';

export const ProtectedRouteLogin: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
     const appAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
     return !appAuthenticated ? <>{children}</> : <Redirect to='/login' />;
};

export const ProtectedRoute: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
     const appAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
     return appAuthenticated ? <>{children}</> : <Redirect to='/' />;
};

export const LoggedInRouter = () => {
     return (
          <>
               <Header />
               <Switch>
                    <Route exact path={'/'}>
                         <HomePage />
                    </Route>
                    <Route path={'/login'}>
                         <HomePage />
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
