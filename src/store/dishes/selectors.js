import { createSelector } from '@reduxjs/toolkit'

export const selectDishes = (state) => state.dishes

export const selectItemOnDishes = createSelector(
    [state => state.dishes, (state, id) => id],
    (dishes, id)=>dishes.filter(item=>item.id==id)[0]
)