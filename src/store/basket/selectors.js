import { createSelector } from '@reduxjs/toolkit'

export const selectBasket = (state) => state.basket



export const selectItemOnBasket = createSelector(
    [state => state.basket, (state, id) => id],
    (basket, id)=>basket.filter(item=>item.id==id)[0]
)