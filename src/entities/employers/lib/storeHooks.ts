import React from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {Employee, EmployersSliceStore} from "../model/types";
import {actions} from "../model";

export const useEmployersActions = () => {
    const dispatch = useDispatch()
    return React.useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}

export const useEmployersList = () => {
    return useSelector((store: EmployersSliceStore) => store.employers.list)
}

export const useSortInfo = () => {
    return useSelector((store: EmployersSliceStore) => store.employers.sort)
}

export const useEmployersFilters = () => {
    return useSelector((store: EmployersSliceStore) => store.employers.filters)
}

export const useEmployersListWithFiltersAndSort = () => {
    const list = useEmployersList();
    const filters = useEmployersFilters()
    const {field, direction} = useSortInfo();

    return React.useMemo(() => {
        let filteredList = [...list];

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                filteredList = filteredList.filter((item) => {
                    const employeeKey = key as keyof Employee;

                    if (employeeKey === 'role') {
                        return item[employeeKey] === value;
                    }

                    if (employeeKey === 'isArchive') {
                        return item[employeeKey] === value;
                    }

                    if (typeof item[employeeKey] === 'string' || typeof item[employeeKey] === 'number') {
                        return item[employeeKey].toString().toLowerCase().includes(value.toString().toLowerCase());
                    }

                    return true;
                });
            }
        });

        if (field) {
            filteredList = filteredList.sort((a, b) => {
                if (a[field] > b[field]) {
                    return direction === 'asc' ? 1 : -1;
                }
                if (a[field] < b[field]) {
                    return direction === 'asc' ? -1 : 1;
                }
                return 0;
            });
        }

        return filteredList;
    }, [list, filters, field, direction]);
}