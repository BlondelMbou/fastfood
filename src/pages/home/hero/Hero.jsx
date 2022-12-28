import React from 'react'

import './hero.css'
import heroImg from '../../../assets/images/img1.png'

function Hero() {
    return (
        <section id="hero">
            <div class="left">
                <h4>Our New Menu</h4>
                <h1 className='big-title'>AFRICAN CHICKEN</h1>
                <p>
                    The production of meat has not caught up with the demand... driven
                    both by the rise in the population but also by the urbanisation
                    phenomenon
                </p>
                <button><a href="#"> Command Now</a></button>
            </div>
            <div class="right">
                <img src={heroImg} alt="" />
            </div>
        </section>
    )
}

export default Hero