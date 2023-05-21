import { GET_AMIIBOS, ADD_TO_CART, HANDLE_CART, HANDLE_ADD, HANDLE_TOTAL } from '../types'

const initialState = {
    amiibos:[],
    loading:true,
    cartItems: [],
    shoppingCartMenu: false,
    total: 0,
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
        case HANDLE_TOTAL: 
            console.log("si si si")
            return {
                ...state,
                total: [ Number(state.total) + action.price]
            }
        default: return state
    }
};