import React, { useEffect } from 'react';
import { LoggedInRouter, PublicRouter } from './components/router';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ActionsAuth from './actions/auth';
import Spinner from './components/generic/Spinner';

function App() {
     const { checkTokenIsExpired } = ActionsAuth();
     const appAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
     const getUser = useSelector((state: RootState) => state.appReducer.user);
     const isLoading = useSelector((state: RootState) => state.appReducer.isLoading);

     useEffect(() => {
          checkTokenIsExpired();
     }, [checkTokenIsExpired]);

     if (isLoading) {
          return <Spinner></Spinner>;
     }

     return getUser && appAuthenticated ? <LoggedInRouter /> : <PublicRouter />;
}

export default App;
