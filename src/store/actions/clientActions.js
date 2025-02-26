// Action Types
export const SET_FILTER = "SET_FILTER";
export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ADDRESSES = "SET_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ADD_ADDRESS = "ADD_ADDRESS";
// Add these action types
export const SET_CARDS = "SET_CARDS";
export const UPDATE_CARD = "UPDATE_CARD";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });

export const setAddresses = (addresses) => {
  return {
    type: SET_ADDRESSES,
    payload: addresses,
  };
};

export const updateAddress = (address) => ({
  type: UPDATE_ADDRESS,
  payload: address,
});

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});



// Add these action creators
export const setCards = (cards) => ({
  type: SET_CARDS,
  payload: cards,
});

export const updateCard = (card) => ({
  type: UPDATE_CARD,
  payload: card,
});

export const addCard = (card) => ({
  type: ADD_CARD,
  payload: card,
});

export const deleteCard = (cardId) => ({
  type: DELETE_CARD,
  payload: cardId,
});