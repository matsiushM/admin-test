import React from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {EmployersSliceStore} from "../model/types";
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

export const useEmployersSortedList = () => {
    const list = useEmployersList()
    const {field, direction} = useSortInfo()

    return React.useMemo(() => {
        if (!field) {
            return list
        }

        return [...list].sort((a, b) => {
            if (a[field] > b[field]) {
                return direction === 'asc' ? 1 : -1
            }
            if (a[field] < b[field]) {
                return direction === 'asc' ? -1 : 1
            }

            return 0
        })
    }, [list, field, direction])
}