import { combineReducers } from "redux";
import stocksReducer from "./stocksReducer";
import graphReducer from "./graphReducer";

export default combineReducers({
  stocksReducer,
  graphReducer
});
