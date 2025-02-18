import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/reducers";

export const store = createStore(reducers);
