import { combineReducers } from "redux";
import {productReducer} from "./Reducers";
import { productDetails } from "./Reducers";

export const allReducers = combineReducers({
  product: productReducer,
  details: productDetails,
});
