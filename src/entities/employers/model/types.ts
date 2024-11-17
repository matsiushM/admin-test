import {Reducer} from "@reduxjs/toolkit";

export interface Employee {
    id: number;
    name: string
    isArchive: boolean;
    role: 'driver' | 'waiter' | 'cook';
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
