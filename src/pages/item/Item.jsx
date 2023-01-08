import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';

import https from '../../https';

import './item.css'
import { addItem } from '../../store/basket/actions';

function Item() {
    const dispatch=useDispatch()
    const history=useHistory()
    const { state } = history.location
    const buy=(qty=1)=>{
        const stored={
            id: state.id,
            name: state.Name,
            description: state.Description,
            price: state.price,
            thumbnail: state.thumbnail,
            quantity: qty
        }
        console.log("the stored", stored)
        dispatch(addItem(stored))
    }

    console.log("the history", history)
    return (
        <div className='item page'>
            <h2>{state.Name} &emsp; {state.price} € </h2>
            <img src={https.baseURL + '/assets/' + state.thumbnail} />
            <h4>Dishe Description</h4>
            <p>{state.Description}</p>
            <Button label="Add To Basket" onClick={()=>buy(1)} className="button" />
        </div>
    )
}

export default Item