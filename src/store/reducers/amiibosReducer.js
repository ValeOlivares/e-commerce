import { GET_AMIIBOS, ADD_TO_CART, HANDLE_CART } from '../types'

const initialState = {
    amiibos:[],
    loading:true,
    cartItems: [],
    total: 0,
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
            }
        default: return state
    }
};