import { setUser } from "../actions/clientActions.js";
import { toast } from "react-toastify";
import md5 from "md5";

export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
  if (getState().client.roles.length === 0) {
    dispatch(setFetchState("FETCHING"));
    try {
      const response = await fetch("/api/roles");
      const data = await response.json();
      dispatch(setRoles(data));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      dispatch(setFetchState("FAILED"));
    }
  }
};

// Thunk Action Creator for Login
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok) {
      // Get Gravatar Image
      const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
        credentials.email.trim().toLowerCase()
      )}?d=identicon`;

      const userWithAvatar = { ...data.user, avatar: gravatarUrl };
      dispatch(setUser(userWithAvatar));

      if (credentials.rememberMe) {
        localStorage.setItem("token", data.token);
      }
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
    throw error; // Prevent navigation on failure
  }
};
