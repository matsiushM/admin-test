import {Reducer} from "@reduxjs/toolkit";

import {ROLES} from "../constants.ts";

export interface Employee {
    id: number;
    name: string
    isArchive: boolean;
    role: typeof ROLES[keyof typeof ROLES];
    phone: string;
    birthday: string
}

export interface EmployersState {
    list: Employee[]
    sortedList: Employee[]
    sort: {
        field: keyof Employee;
        direction: 'asc' | 'desc'
    }
}

export type EmployersSliceStore = ReturnType<Reducer<{
    employers: EmployersState
}>>
