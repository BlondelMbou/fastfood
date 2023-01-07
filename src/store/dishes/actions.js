import CONSTANTS from './constants'

export const setDishes = (dishes) => ({
    type: CONSTANTS.SET_DISHES,
    payload: dishes
})

export const removeDish = (id) => ({
    type: CONSTANTS.REMOVE,
    payload: id
})

export const clearDishes = () => ({
    type: CONSTANTS.CLEAR_DISHES
})