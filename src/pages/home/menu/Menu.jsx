import React, { useState, useEffect } from 'react'

import https from '../../../components/https'

import './menu.css'
import im5 from '../../../assets/images/img5.png'
import im1 from '../../../assets/images/img1.png'
import im3 from '../../../assets/images/img3.png'
import MenuItem from './MenuItem'

function Menu() {
    const [dishes, setDishes] = useState([])
    useEffect(() => {
        getDishes()

        return () => {

        }
    }, [])

    const getDishes = async () => {
        https.get('/items/Dishes')
            .then(({ data }) => {
                console.log("the response ", data)
                setDishes(data.data)
            })
            .catch(error => {
                window.alert('there is an error on dish fetching')
                console.error("the error ", error)
            })
    }
    return (
        <section id="menu">
            <h4 class="mini_title">Our menu</h4>
            <h2 class="title">Popular Menu</h2>
            <div class="dishes">
                {dishes.map((dish, i) => <MenuItem data={dish} key={`dish-${i}`} />)}
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
                {/* <div class="dish">
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
                </div> */}
            </div>
        </section>
    )
}

export default Menu