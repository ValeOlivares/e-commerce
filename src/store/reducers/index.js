import { combineReducers } from 'redux'
import amiibosReducer from './amiibosReducer'

export default combineReducers({
  amiibos: amiibosReducer
})