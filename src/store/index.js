import { combineReducers } from 'redux';
import { clientReducer } from './reducers/clientReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  cart: cartReducer,
});

export default rootReducer;
