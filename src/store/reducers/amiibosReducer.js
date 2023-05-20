import { GET_AMIIBOS } from '../../types'

const initialState = {
    amiibos:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_AMIIBOS:
        return {
            ...state,
            amiibos:action.payload,
            loading:false
        }
        default: return state
    }
};