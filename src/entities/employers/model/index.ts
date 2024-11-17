import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {Employee, EmployersState} from "./types";
import {EMPLOYERS_MOCKED} from "./employersMocked";

const initialState: EmployersState = {
    list: EMPLOYERS_MOCKED,
    sortedList: EMPLOYERS_MOCKED,
    sort: {field: 'id', direction: 'asc'}
}

export const employersSlice = createSlice({
    name: 'employers',
    initialState,
    reducers: {
        sortBy: (state, {payload}: PayloadAction<EmployersState['sort']>) => {
            state.sort = payload
        },
        editEmployee: (state, {payload}: PayloadAction<Employee>) => {
            state.list = state.list.map((e) => {
                if(payload.id === e.id) {
                    return payload
                }

                return e
            })
        }
    },
})

export const actions = employersSlice.actions

export default employersSlice.reducer