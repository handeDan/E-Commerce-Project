import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  ADD_TO_CART,
} from "../actions/shoppingCartActions.js";

// Initial States
const initialShoppingCartState = {
  cart: [],
  payment: {},
  address: {},
};

// Reducers
export const shoppingCartReducer = (
  state = initialShoppingCartState,
  action
) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
