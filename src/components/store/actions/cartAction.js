import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../types'


export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}