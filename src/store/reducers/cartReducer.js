import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
} from "../actions/cartActions";

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const calculateTotals = (items) => {
  return items.reduce(
    (acc, item) => ({
      totalPrice: acc.totalPrice + item.price * item.quantity,
      totalItems: acc.totalItems + item.quantity,
    }),
    { totalPrice: 0, totalItems: 0 }
  );
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItems = [...state.items, action.payload];
      const totals = calculateTotals(newItems);
      return {
        ...state,
        items: newItems,
        ...totals,
      };
    }

    case REMOVE_FROM_CART: {
      const newItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const totals = calculateTotals(newItems);
      return {
        ...state,
        items: newItems,
        ...totals,
      };
    }

    case UPDATE_CART_QUANTITY: {
      const newItems = state.items.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const totals = calculateTotals(newItems);
      return {
        ...state,
        items: newItems,
        ...totals,
      };
    }

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};
