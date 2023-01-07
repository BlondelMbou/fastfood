import CONSTANTS from './constants'

export const basketReducer = (basket = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD:
            return [...basket, action.payload]
        case CONSTANTS.UPDATE:
            return basket.map(item => {
                if (item.id === action.payload.id) return { ...item, ...action.payload }
                else return item
            })

        case CONSTANTS.REMOVE:
            return basket.filter(item => item.id !== action.payload)
        case CONSTANTS.CLEAR:
            return []
        default:
            return basket
    }
}