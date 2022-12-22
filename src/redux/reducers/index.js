import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import authReducers from "./authReducers";

const authConfig = { key: "auth", storage };

const reducer = combineReducers({
  auth : persistReducer(authConfig, authReducers)
});

export default reducer;
