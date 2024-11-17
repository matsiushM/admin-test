import {createSlice} from '@reduxjs/toolkit'

import {EmployersState} from "./types";
import {EMPLOYERS_MOCKED} from "./employersMocked";

const initialState: EmployersState = {
    list: EMPLOYERS_MOCKED
}

export const employersSlice = createSlice({
    name: 'employers',
    initialState,
    reducers: {},
})

export const {} = employersSlice.actions

export default employersSlice.reducer