import { GET_AMIIBOS, AMIIBOS_ERROR, ADD_TO_CART, HANDLE_CART  } from '../types'
import axios from 'axios'

export const getAmiibos = () => async dispatch => {
    try{
        const res = await axios.get(`https://amiiboapi.com/api/amiibo`)
        dispatch( {
            type: GET_AMIIBOS,
            payload: res.data
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
    return { type: ADD_TO_CART, item }
};

export const handleShoppingCart = () => {
    return { type: HANDLE_CART }
};
