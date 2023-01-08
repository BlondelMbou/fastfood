import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { FiChevronDown } from 'react-icons/fi'

import { selectBasket } from '../../store/basket/selectors'

import './basket.css'
import { addItem, removeItem } from '../../store/basket/actions'

function Basket() {
    const basket = useSelector(selectBasket)

    const sum = () => {
        let amount=0
        basket.map(item=>amount+=item.price*item.quantity)
        return amount
    }
    console.log("the basket ", basket)
    return (
        <div className='basket page'>
            <h2>The Basket :</h2>
            <div className="basket-container">
                <div className="content">
                    <div className="item-row head">
                        <div>Add</div>
                        <div>Remove</div>
                        <div>Dish</div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Total</div>
                        <div>Details</div>
                    </div>
                    {basket.map((item, i) => <Item data={item} key={`dish-${i}`} />)}
                </div>
                <div className="total">
                    <h4>Total</h4>
                    <h3 className='title'>{sum()} €</h3>
                    <button className='button'>Send Command</button>
                </div>
            </div>
        </div>
    )
}

const Item = ({ data }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const add = () => dispatch(addItem({ id: data.id }))
    const remove = () => dispatch(removeItem({ id: data.id }))
    return (
        <div className="item-row">
            <div onClick={add}>+</div>
            <div onClick={remove}>-</div>
            <div>{data.name}</div>
            <div>{data.quantity}</div>
            <div>{data.price} €</div>
            <div>{data.price * data.quantity} €</div>
            <div><FiChevronDown /></div>
        </div>
    )
}

export default Basket