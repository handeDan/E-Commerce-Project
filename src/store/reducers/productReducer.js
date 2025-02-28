import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  SET_DETAIL_PRODUCT,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_ERROR,
} from "../actions/productActions.js";

// Initial States
const initialProductState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED",
  detailProduct: null,
  loading: false,
};

// Reducers
export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_DETAIL_PRODUCT:
      return { ...state, detailProduct: action.payload, loading: false };
    case FETCH_PRODUCT_START:
      return { ...state, loading: true };
    case FETCH_PRODUCT_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};
