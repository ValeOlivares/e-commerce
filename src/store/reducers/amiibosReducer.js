import { GET_AMIIBOS, ADD_TO_CART } from '../types'

const initialState = {
    amiibos:[],
    loading:true,
    cartItems: [],
    total: 0,
};

export default function(state = initialState, action){
    console.log(action)
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
        default: return state
    }
};