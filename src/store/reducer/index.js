import { combineReducers } from "redux";
import { expensesReducer } from "./expensesReducer";

export const reducer = combineReducers({
  expenses: expensesReducer //where does expenses come from ??? could be any name actually
});
