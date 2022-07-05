import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

function App() {
     // useEffect(() => {
     //      fetch('/test') //check this
     //           .then(res => res.json())
     //           .then(data => console.log(data));
     // }, []);

     return (
          <Provider store={store}>
               {/* <BrowserRouter> */}
               <div className='App'>
                    <header className='App-header'>
                         <Login></Login>
                    </header>
               </div>
               {/* </BrowserRouter> */}
          </Provider>
     );
}

export default App;
