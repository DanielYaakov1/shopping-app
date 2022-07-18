import React, { PropsWithChildren, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import HomePage from '../../../pages/HomePage';
import Login from '../../../pages/Login';
import { RootState } from '../../../store';

export const PublicRouter: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
     //const isAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
     const isAuthenticated = !localStorage.getItem('token');
     return !isAuthenticated ? <>{children}</> : <Redirect to='/login' />;
};

export const PrivateRoute: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
     //const isAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
     const isAuthenticated = localStorage.getItem('token') !== null;
     return isAuthenticated ? <>{children}</> : <Redirect to='/' />;
};
