import React from 'react';

import './animations.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import Register from './Register/Register';
import AboutUs from './AboutUs/AboutUs';
import Testimony from './Testimony/Testimony';
import Reservation from './Reservation/Reservation';
import Footer from './Footer/Footer';

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
  );
}

export default AppRoot;
