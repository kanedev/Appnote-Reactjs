import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

import './index.css';
//import Home from './components/Home';

import * as serviceWorker from './serviceWorker';


const App = () => {
    return (


        <div className="container">
            <BrowserRouter>
            <Routes></Routes>
            </BrowserRouter>
        </div>
    )
}




ReactDOM.render(<App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
