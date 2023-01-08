/* The header component of application */

import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

import './header.css';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../store/basket/selectors';

function Header() {
    const toogleMenu = () => {
        document.querySelector('.toggle_menu').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('responsive');
    };
    const history=useHistory()
    return (
        <header>
            <div class="logo" onClick={()=>history.push('/')} >
                <p>
                    <span>Your</span>Dish
                </p>
            </div>
            <ul class="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/#menu">Menu</Link>
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
                <Basket />
            </ul>

            <div class="toggle_menu" onClick={toogleMenu} />
        </header>
    );
}

const Basket = () => {
    const basket = useSelector(selectBasket)
    return (
        <div className="basket">
            <Link to="/basket"><BsCart size={30} /></Link>
            {basket.length ? <span>{basket.length}</span> : null}
        </div>
    )
}

export default Header;
