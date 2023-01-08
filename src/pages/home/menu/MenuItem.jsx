import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

import https from '../../../https'
import { addItem } from '../../../store/basket/actions'

function MenuItem({ data }) {
    const dispatch=useDispatch()
    const history=useHistory()
    const buy=(qty=1)=>{
        const stored={
            id: data.id,
            name: data.Name,
            description: data.Description,
            price: data.price,
            thumbnail: data.thumbnail,
            quantity: qty
        }
        // console.log("the stored", stored)
        dispatch(addItem(stored))
    }
    return (
        <div class="dish">
            <img src={https.baseURL + '/assets/' + data.thumbnail} onClick={()=>history.push('/item/:'+data.id, data)} />
            <p>{data.Name}</p>
            <h2>${data.price}</h2>
            <button onClick={()=>buy(1)} >BUY</button>
        </div>
    )
}

export default MenuItem