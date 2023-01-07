import CONSTANTS from './constants'

export const dishesReducer = (dishes = [], action) => {
    switch (action.type) {
        case CONSTANTS.SET_DISHES:
            return [...action.payload]
        case CONSTANTS.REMOVE:
            return dishes.filter(item => item.id !== action.payload)
        case CONSTANTS.CLEAR:
            return []
        default:
            return dishes
    }
}