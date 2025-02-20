import md5 from "md5";
import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
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
    default:
      return state;
  }
};
