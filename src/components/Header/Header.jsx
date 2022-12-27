/* The header component of application */

import React from 'react'

import './header.css'

function Header() {

    const toogleMenu=()=>{
        document.querySelector('.toggle_menu').classList.toggle('active')
        document.querySelector('.menu').classList.toggle('responsive')
    }
    return (
        <header>
            <div class="logo">
                <p><span>Your</span>Dish</p>
            </div>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about_us">About Us</a></li>
                <li><a href="#reservation">Reservation</a></li>
            </ul>

            <div class="toggle_menu" onClick={toogleMenu} />
        </header>
    )
}

export default Header