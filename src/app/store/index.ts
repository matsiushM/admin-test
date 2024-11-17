import {combineReducers, configureStore} from "@reduxjs/toolkit";

const mainReducer = combineReducers({
});

export const store = configureStore({
    reducer: mainReducer,
})