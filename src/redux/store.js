import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from './reducers'
// import {persistStore} from 'redux-persist'

const store = configureStore({
    reducer,
    middleware:[thunk]
})

export default store
// export const persistore = persistStore(store)

