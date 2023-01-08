import React from 'react';

import Hero from './hero/Hero';
import Menu from './menu/Menu';
import AboutUs from './aboutUs/AboutUs';
import Testimony from './testimony/Testimony';
import Reservation from './reservation/Reservation';

function Home() {
    return (
        <div className='page'>
            <Hero />
            <Menu />
            <AboutUs />
            <Testimony />
            <Reservation />
        </div>
    )
}

export default Home