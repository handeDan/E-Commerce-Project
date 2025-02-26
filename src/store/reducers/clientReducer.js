import md5 from "md5";
import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  SET_ADDRESSES,
  UPDATE_ADDRESS,
  ADD_ADDRESS,
  SET_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
} from "../actions/clientActions.js";

// Initial States
const initialClientState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
  cards: [],
};

// Reducers
export const clientReducer = (state = initialClientState, action) => {
  console.log(action);
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
        addresses: [...state.addresses, action.payload],
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };
    case SET_CARDS:
      return { ...state, cards: action.payload };
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    case UPDATE_CARD:
      console.log(action.payload, state.cards.map((card) =>
        card.id === action.payload.id ? action.payload : card
      ));    
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card
        ),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    default:
      return state;
  }
};
