import React from 'react';

import './animations.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Testimony from './Testimony/Testimony';
import Reservation from './Reservation/Reservation';
import Footer from './Footer/Footer';
import AboutUs from './AboutUs/AboutUs';

function AppRoot() {
  return (
    <div className="approot">
      <Header />
      <Hero />
      <AboutUs />
      <Testimony />
      <Reservation />
      <Footer />
    </div>
  );
}

export default AppRoot;
