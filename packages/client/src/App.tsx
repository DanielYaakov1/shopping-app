import React, { useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
     useEffect(() => {
          fetch('/test')
               .then(res => res.json())
               .then(data => console.log(data));
     }, []);

     return (
          <div className='App'>
               <header className='App-header'>
                    <Login></Login>
               </header>
          </div>
     );
}

export default App;
