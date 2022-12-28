import React from 'react';

import './animations.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/home/Home';
import Navigator from '../navigation/Navigator';

function AppRoot() {
    return (
        <div className="approot">
            {/* <Header />
            <Home />
            <Login />
            <Register />
            <Footer /> */}
            <Navigator />
        </div>
    )
}

export default AppRoot
