import { combineReducers } from "redux";

import { clientReducer } from "./clientReducer.js";
import { productReducer } from "./productReducer.js";
import { shoppingCartReducer } from "./shoppingCartReducer.js";

export const reducers = combineReducers({
  clientReducer: clientReducer,
  productReducer: productReducer,
  shoppingCartReducer: shoppingCartReducer,
});
