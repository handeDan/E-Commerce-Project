import { combineReducers } from "redux";

import { clientReducer } from "./clientReducer.js";
import { productReducer } from "./productReducer.js";
import { shoppingCartReducer } from "./shoppingCartReducer.js";
import { cartReducer } from "./cartReducer.js";

export const reducers = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  cart: cartReducer,
});
