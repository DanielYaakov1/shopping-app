import React, { useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './components/generic/Header';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';

function App() {
     return (
          <div>
               <Header />
               <Switch>
                    <Route exact path={'/'}>
                         <header className='App-header'>
                              <Login></Login>
                         </header>
                    </Route>

                    <Route path={'/home'}>
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
