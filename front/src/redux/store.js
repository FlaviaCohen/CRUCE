import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import combineReducers from "../redux/reducers";

export default createStore(
  combineReducers,
  applyMiddleware(createLogger(), thunkMiddleware)
);
