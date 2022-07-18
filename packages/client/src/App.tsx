import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/generic/Header';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import { getStorageApi } from './services/storageApi';
import { PublicRouter, PrivateRoute } from './components/router/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { setAppAuthenticated } from './store/slices/appSlice';
import { RootState } from './store';

function App() {
     const history = useHistory();
     const dispatch = useDispatch();

     // const user = {};

     useEffect(() => {
          // send request to server with fetcher
          const refreshUser = async () => {
               try {
                    const user = await fetch('/auth/refresh');
                    if (user.status !== 200) {
                         dispatch(setAppAuthenticated(user.ok));
                         history.replace('/login');
                         return;
                    }
                    //save to redux state
                    dispatch(setAppAuthenticated(user.ok));
               } catch (err) {
                    // redirect to login
                    console.log(err, 'this is the error');
               }
          };
          refreshUser();
     }, [dispatch, history]);
     const isAppAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
     //console.log('isAppAuthenticated', isAppAuthenticated);

     return (
          <div>
               {/* {user ? <LoggedInRouter /> : <PublicRouter />} */}

               <Switch>
                    <Route exact path={'/login'}>
                         <Login />
                    </Route>
                    <Route exact path={'/'}>
                         <Header />
                         <HomePage />
                    </Route>
                    <Route path={'*'}>
                         <PageNotFound />
                    </Route>
               </Switch>
          </div>
     );
}

export default App;

//
// <Switch>
// {!isAuthenticated && (
//      <Route exact path={'/login'}>
//           <Login />
//      </Route>
// )}
// {isAuthenticated && (
//      <>
//           <Header />
//           <Route exact path={'/'}>
//                <HomePage />
//           </Route>
//           <Route path={'*'}>
//                {' '}
//                <PageNotFound />{' '}
//           </Route>
//      </>
// )}
// </Switch>
