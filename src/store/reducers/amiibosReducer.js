import { GET_AMIIBOS, ADD_TO_CART, HANDLE_CART, HANDLE_ADD } from '../types'

const initialState = {
    amiibos:[],
    loading:true,
    cartItems: [],
    shoppingCartMenu: false,
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_AMIIBOS:
            return {
                ...state,
                amiibos:action.payload,
                loading:false
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartItems:[...state.cartItems, action.item]
            };
        case HANDLE_CART:
            return {
                ...state,
                shoppingCartMenu: !state.shoppingCartMenu
            };
        case HANDLE_ADD:
            return {
                ...state,
            }
        default: return state
    }
};