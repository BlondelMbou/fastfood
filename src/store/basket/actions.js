import CONSTANTS from './constants'

export const addItem = (item) => ({
    type: CONSTANTS.ADD,
    payload: item
})

export const updateItem = (item) => ({
    type: CONSTANTS.UPDATE,
    payload: item
})

export const removeItem = (id) => ({
    type: CONSTANTS.REMOVE,
    payload: id
})

export const clearBasket = () => ({
    type: CONSTANTS.CLEAR
})