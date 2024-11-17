import {Reducer} from "@reduxjs/toolkit";

export interface EmployersState {
    list: Employee[]
}

export type EmployersSliceStore = ReturnType<Reducer<{
    employers: EmployersState
}>>

export interface Employee {
    id: number;
    name: string
    isArchive: boolean;
    role: 'driver' | 'waiter' | 'cook';
    phone: string;
    birthday: string
}

