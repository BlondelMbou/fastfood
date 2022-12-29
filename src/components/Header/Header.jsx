/* The header component of application */

import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {
    const toogleMenu = () => {
        document.querySelector('.toggle_menu').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('responsive');
    };
    return (
        <header>
            <div class="logo">
                <p>
                    <span>Your</span>Dish
                </p>
            </div>
            <ul class="menu">
                {/* <Link to='/signup'>Sig</Link> */}
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/#menu">Menu</Link>
                </li>
                <li>
                    <a href="/#menu">Menu</a>
                </li>
                <li>
                    <Link to="/#about_us">About Us</Link>
                </li>
                <li>
                    <Link to="/#reservation">Reservation</Link>
                </li>
                <li>
                    <Link to="/signin">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Registration</Link>
                </li>
            </ul>

            <div class="toggle_menu" onClick={toogleMenu} />
        </header>
    );
}

export default Header;
