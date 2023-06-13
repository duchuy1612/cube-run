import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducer, userLogoutReducer } from "./reducers/userReducers";

export const Store = configureStore({
    reducer: {
        login: userLoginReducer,
        logout: userLogoutReducer,
    }
});