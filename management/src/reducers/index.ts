import { userLoginReducer } from "./userReducers";
import { userLogoutReducer } from "./userReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  login: userLoginReducer,
  logout: userLogoutReducer,
});

