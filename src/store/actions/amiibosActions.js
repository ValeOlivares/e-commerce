import axios from 'axios';
import { 
    GET_AMIIBOS, 
    AMIIBOS_ERROR, 
    ADD_TO_CART, 
    HANDLE_CART, 
    HANDLE_REMOVE, 
    HANDLE_ADD, 
    HANDLE_TOTAL,
} from '../types';
import { getRandomPrice } from '../../utils/utils';

export const getAmiibos = () => async dispatch => {
    try{
        let res = await axios.get(`https://amiiboapi.com/api/amiibo`);
        res = res.data.amiibo.map((item, index) => ({ ...item, id: index + 1, price:getRandomPrice(1000, 3000) }));
        dispatch( {
            type: GET_AMIIBOS,
            payload: res
        })
    }
    catch(e){
        dispatch( {
            type: AMIIBOS_ERROR,
            payload: console.log(e),
        })
    }
};

export const addToCart = (item) => {
    item.qty = 1;
    return { type: ADD_TO_CART, item }
};

export const handleShoppingCart = () => {
    return { type: HANDLE_CART }
};

export const handleTotal = (price) => {
    return { type: HANDLE_TOTAL, price}
};

export const handleAdd = (id) => {
    return { type: HANDLE_ADD, id}
};

export const handleRemove = (id) => {
    return { type : HANDLE_REMOVE, id }
};



