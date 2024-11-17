import {useSelector} from "react-redux";

import {EmployersSliceStore} from "../model/types";

export const useEmployersList = () => {
    return useSelector((store: EmployersSliceStore) => store.employers.list)
}