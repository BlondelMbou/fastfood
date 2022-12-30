import CONSTANTS from './constants'

export const setUser = (user) => ({
    type: CONSTANTS.SET_USER,
    payload: user
})

export const updateUser = (user) => ({
    type: CONSTANTS.UPDATE_USER,
    payload: user
})

export const removeUser = () => ({
    type: CONSTANTS.REMOVE_USER
})

