import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LoggedInRouter, PublicRouter } from './components/router';
import { useDispatch, useSelector } from 'react-redux';
import { setAppAuthenticated, setUser } from './store/slices/appSlice';
import { RootState } from './store';

function App() {
     const history = useHistory();
     const dispatch = useDispatch();
     const appAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
     const user = useSelector((state: RootState) => state.appReducer.user);

     console.log(user, 'this is the user');
     useEffect(() => {
          // send request to server with fetcher
          const refreshUser = async () => {
               try {
                    const response = await fetch('/auth/refresh');
                    const user = await response.json();
                    console.log(user, 'this is the user1111');
                    dispatch(setUser(user));
                    dispatch(setAppAuthenticated(response.ok));
                    if (response.status !== 200) {
                         history.replace('/login');
                    }
               } catch (err) {
                    console.log(err, 'this is the error');
               }
          };
          refreshUser();
     }, [dispatch, history]);

     if (appAuthenticated === null) {
          return (
               <div
                    style={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         height: '100vh',
                         width: '100vw',
                    }}>
                    Loading...
               </div>
          );
     }

     return appAuthenticated ? <LoggedInRouter /> : <PublicRouter />;
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

// {
//      /* <Switch>
//                     <Route exact path={'/login'}>
//                          <Login />
//                     </Route>
//                     <Route exact path={'/'}>
//                          <Header />
//                          <HomePage />
//                     </Route>
//                     <Route path={'*'}>
//                          <PageNotFound />
//                     </Route>
//                </Switch> */
// }
