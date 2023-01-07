import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import https from '../../../https'

import './menu.css'
import im5 from '../../../assets/images/img5.png'
import im1 from '../../../assets/images/img1.png'
import im3 from '../../../assets/images/img3.png'
import MenuItem from './MenuItem'
import { selectUser } from '../../../store/users/selectors'
import { selectDishes } from '../../../store/dishes/selectors'
import { setDishes } from '../../../store/dishes/actions'
import { ToastContext } from '../../../components/shared/toast/Toast'

function Menu() {
    const [dishes, setLocalDishes] = useState(useSelector(selectDishes))   // useSelector(selectDishes)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const toast=useContext(ToastContext)
    useEffect(() => {
        // toast.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'})
        if (!dishes.length) getDishes()
        else console.log("we already have dishes")
        return () => {

        }
    }, [])
    const getDishes = async () => {
        https.get('/items/Dishes')
            .then(({ data }) => {
                console.log("the response ", data)
                setLocalDishes(data.data)
                dispatch(setDishes(data.data))
            })
            .catch(error => {
                window.alert('there is an error on dish fetching')
                console.error("the error ", error)
            })
    }
    // console.log("the user ", user)
    // console.log("the dishes ", dishes)
    console.log("the toast ", toast)
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