// Action Types
export const SET_FILTER = "SET_FILTER";
export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ADDRESSES = "SET_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ADD_ADDRESS = "ADD_ADDRESS";

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
