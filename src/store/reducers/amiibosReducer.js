import { GET_AMIIBOS, ADD_TO_CART, HANDLE_CART, HANDLE_ADD, HANDLE_TOTAL, HANDLE_REMOVE } from '../types'
import { loadCartItems, loadTotal} from '../../utils/localStorage';

const initialState = {
    amiibos:[],
    loading:true,
    cartItems: loadCartItems() || [],
    shoppingCartMenu: false,
    total: loadTotal() || 0,
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
            localStorage.setItem('cartItems', JSON.stringify([...state.cartItems, action.item]));
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
            const addedElementIndex = state.cartItems.findIndex((item => item.id == action.id));
            const addedNewTotal = Number(state.total) + state.cartItems[addedElementIndex].price;
            state.cartItems[addedElementIndex].qty += 1;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            localStorage.setItem('total', JSON.stringify(addedNewTotal))
            return {
                ...state,
                cartItems: state.cartItems,
                total: addedNewTotal,
            }
            case HANDLE_REMOVE:
                const removedObjIndex = state.cartItems.findIndex((item => item.id == action.id));
                const removedNewTotal = Number(state.total) - state.cartItems[removedObjIndex].price;
                state.cartItems[removedObjIndex].qty -= 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
                localStorage.setItem('total', JSON.stringify(removedNewTotal));
                return {
                    ...state,
                    cartItems: state.cartItems,
                    total: removedNewTotal,
                }
        //TODO: refactor innecasary HANDLE_TOTAL
        case HANDLE_TOTAL:
            localStorage.setItem('total', Number(state.total)+ action.price);
            return {
                ...state,
                total: [ Number(state.total) + action.price]
            }
        default: return state
    }
};