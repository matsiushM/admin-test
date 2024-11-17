import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {EmployersReducer, EmployersState} from "entities/employers";

const mainReducer = combineReducers({
    employers: EmployersReducer as unknown as EmployersState
});

export const store = configureStore({
    reducer: mainReducer,
})