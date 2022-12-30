import React from 'react'
import https from '../../../https'

function MenuItem({ data }) {
    return (
        <div class="dish">
            <img src={https.baseURL + '/assets/' + data.thumbnail} />
            <p>{data.Name}</p>
            <h2>${data.price}</h2>
            <a href="#">BUY</a>
        </div>
    )
}

export default MenuItem