import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Product from './components/Product';
//import Register from './components/Register';
//import SignUp from './components/SignUp';

import Navbarmenu from './components/menu/Navbarmenu';

function App() {
    return ( <
        div >
        <
        Router > { /* Add Menu Component */ } <
        Navbarmenu / >

        { /* Define Routes */ } <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > }
        /> <
        Route path = "/About"
        element = { < About / > }
        />  <
        Route path = "/Product"
        element = { < Product / > }
        />  <
        Route path = "/Login"
        element = { < Login / > }
        /> < /
        Routes > <
        /Router> < /
        div >
    );
}

export default App;