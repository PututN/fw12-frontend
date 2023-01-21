import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducers from "./authReducers";
import transactionReducers from "./transactionReducers";

const authConfig = { key: "auth", storage };
const transactionConfig = { key: "transaction", storage };

const reducer = combineReducers({
  auth: persistReducer(authConfig, authReducers),
  transaction: persistReducer(transactionConfig, transactionReducers),
});

export default reducer;
