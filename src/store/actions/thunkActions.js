import { setUser } from "../actions/clientActions.js";
import { toast } from "react-toastify";
import md5 from "md5";
import { api } from "../../pages/SignupPage.jsx";

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
export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    const response = await api.post("/login", credentials);
    const data = response.data;

    if (response.status === 200 && data.token) {
      // Get Gravatar Image

      dispatch(setUser(data));
      if (credentials.rememberMe) {
        localStorage.setItem("token", data.token);
      }

      // Önceki sayfa yoksa anasayfaya yönlendir
      //if (window.history.length > 2) {
      navigate("/"); // Anasayfaya git
      //}
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
    throw error; // Prevent navigation on failure
  }
};
