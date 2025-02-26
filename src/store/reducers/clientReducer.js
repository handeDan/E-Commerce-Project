import md5 from "md5";
import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  SET_ADDRESSES,
  UPDATE_ADDRESS,
  ADD_ADDRESS,
} from "../actions/clientActions.js";

// Initial States
const initialClientState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
};

// Reducers
export const clientReducer = (state = initialClientState, action) => {
  switch (action.type) {
    case SET_USER:
      const data = action.payload;
      if (!data) {
        return { ...state, user: null };
      }
      const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
        data.email.trim().toLowerCase()
      )}?d=identicon`;

      const userWithAvatar = {
        name: data.name,
        email: data.email,
        avatar: gravatarUrl,
      };
      return { ...state, user: userWithAvatar };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload, // adresleri payload'dan alıp state'e set ediyoruz
      };
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.shoppingCart, action.payload],
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        addresses: state.shoppingCart.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };
    default:
      return state;
  }
};
