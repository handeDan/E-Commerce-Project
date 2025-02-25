import {
  SET_CART,
  SET_PAYMENT,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../actions/shoppingCartActions.js";

// Initial States
const initialShoppingCartState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [], // Sayfa yenilenince sepeti yükle
  payment: {},
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
    case ADD_TO_CART:
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Güncellenmiş sepeti kaydet
      return { ...state, cart: updatedCart };
    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return { ...state, cart: filteredCart };
    case CLEAR_CART:
      localStorage.removeItem("cart"); // Sepeti sıfırla
      return { ...state, cart: [] };
    default:
      return state;
  }
};
