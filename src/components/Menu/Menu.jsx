import React from 'react'

import './menu.css'
import im5 from '../../assets/images/img5.png'
import im1 from '../../assets/images/img1.png'
import im3 from '../../assets/images/img3.png'

function Menu() {
    return (
        <section id="menu">
            <h4 class="mini_title">Our menu</h4>
            <h2 class="title">Popular Menu</h2>
            <div class="dishes">
                <div class="dish">
                    <img src={im5} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
                <div class="dish">
                    <img src={im3} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
                <div class="dish">
                    <img src={im1} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
                <div class="dish">
                    <img src={im3} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
                <div class="dish">
                    <img src={im5} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
                <div class="dish">
                    <img src={im1} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
                <div class="dish">
                    <img src={im3} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
                <div class="dish">
                    <img src={im5} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
                <div class="dish">
                    <img src={im1} />
                    <p>Chicken Orido</p>
                    <h2>$24.99</h2>
                    <a href="#">BUY</a>
                </div>
            </div>
        </section>
    )
}

export default Menu