import {createBrowserRouter} from "react-router-dom";

import Employers from "./employers";
import EmployersEditor from "./emplyers-editor";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Employers/>,
    },
    {
        path: '/edit/:id',
        element: <EmployersEditor/>
    }
])
