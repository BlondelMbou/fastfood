import CONSTANTS from './constants'

export const userReducer = (user = null, action) => {
    switch (action.type) {
        case CONSTANTS.SET_USER:
            return action.payload
        case CONSTANTS.UPDATE_USER:
            return { ...user, ...action.payload }
        case CONSTANTS.REMOVE_USER:
            return null
        default:
            return user
    }
}