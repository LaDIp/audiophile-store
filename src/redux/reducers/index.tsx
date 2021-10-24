import { combineReducers } from 'redux'
import { default as cartReducer } from './cartReducer'

const rootReducer = combineReducers({ cart: cartReducer })

export default rootReducer
