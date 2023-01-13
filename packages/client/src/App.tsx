import React, { useEffect } from 'react';
import { LoggedInRouter, PublicRouter } from './components/router';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ActionsAuth from './actions/auth';
import Spinner from './components/Spinner';

function App() {
  const { checkTokenIsExpired } = ActionsAuth();
  const { isLoadingApp, isAppAuthenticated } = useSelector((state: RootState) => state.appReducer);
  const getUser = useSelector((state: RootState) => state.userReducer.uid);
  console.log(getUser, 'this is the get user');

  useEffect(() => {
    checkTokenIsExpired();
  }, [checkTokenIsExpired]);

  if (isLoadingApp) {
    return <Spinner />;
  }

  return getUser && isAppAuthenticated ? <LoggedInRouter /> : <PublicRouter />;
}

export default App;
