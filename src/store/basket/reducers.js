import CONSTANTS from './constants'

export const basketReducer = (basket = [], action) => {
    let witness = false
    let newBasket = []
    switch (action.type) {
        case CONSTANTS.ADD:
            newBasket = basket.map(item => {
                if (item.id === action.payload.id) {
                    witness = true
                    return { ...item, quantity: item.quantity + 1 }
                } else return item
            })
            // console.log("the new basket and witness ", witness, newBasket)
            if (witness) return newBasket
            else return [...basket, action.payload]
        case CONSTANTS.UPDATE:
            return basket.map(item => {
                if (item.id === action.payload.id) return { ...item, ...action.payload }
                else return item
            })

        case CONSTANTS.REMOVE:
            newBasket = basket.map(item => {
                if (item.id === action.payload.id) {
                    if(item.quantity>=2) {
                        witness = true
                        return { ...item, quantity: item.quantity - 1 }
                    } 
                } else return item
            })
            // console.log("the new basket and witness ", witness, newBasket)
            if (witness) return newBasket
            else return basket.filter(item => item.id !== action.payload.id)
        case CONSTANTS.CLEAR:
            return []
        default:
            return basket
    }
}