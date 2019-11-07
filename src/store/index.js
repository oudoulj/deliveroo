import { createStore } from "redux";
import { reducer } from "./reducer";

// Identity reducer for now. Replaced by import { reducer } afterwards
//const reducer = (state = {}, action) => state;

const devtool =
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, devtool);
