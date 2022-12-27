import React from 'react';

import './animations.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Login from './Login/Login'
import Menu from './Menu/Menu'
import Register from './Register/Register'

function AppRoot() {
    return (
        <div className="approot">
            <Header />
            <Hero />
            <Menu />
            <AboutUs />
            <Testimony />
            <Reservation />
            <Login />
            <Register />
            <Footer />
        </div>
    )

