import { setUser } from "../actions/clientActions.js";
import { toast } from "react-toastify";
import { api } from "../../pages/SignupPage.jsx";
import { setCategories, setProductList } from "./productActions.js";

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

      navigate("/"); // Anasayfaya git
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
    throw error; // Prevent navigation on failure
  }
};

//Thunk Action for fetching token
export const fetchToken = async (dispatch) => {
  try {
    const token = localStorage.getItem("token"); // Token'ı güvenli bir şekilde al

    if (!token) {
      return;
    }

    const response = await api.get("/verify", {
      headers: { Authorization: token },
    });

    dispatch(setUser(response.data)); // Redux store'a kullanıcıyı kaydet
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

// Thunk Action for fetching categories
export const fetchCategories = async (dispatch) => {
  try {
    const response = await api.get("/categories");
    const data = response.data;
    if (response.status === 200) {
      dispatch(setCategories(data));
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
    throw error; // Prevent navigation on failure
  }
};

// Thunk Action Creater for getting products
export const fetchProducts = (query) => async (dispatch) => {
  let url = "/products";
  if (query && query["*"]) {
    let urlParts = [];
    const tmp = query["*"].split("/");
    if (tmp.length) {
      url += "?";
      if (tmp[2]) {
        urlParts.push("category=" + tmp[2]);
      }
      if (tmp[3]) {
        url += "sort=" + tmp[3];
      }
      url += urlParts.join("&");
    }
  }
  try {
    const response = await api.get(url);
    const data = response.data;
    if (response.status === 200) {
      dispatch(setProductList(data));
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
    throw error; // Prevent navigation on failure
  }
};

///products?category=2&filter=siyah&sort=price:desc
