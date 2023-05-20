import { GET_AMIIBOS, AMIIBOS_ERROR } from '../../types'
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