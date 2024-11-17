import {createBrowserRouter} from "react-router-dom";

import Employers from "./employers-page";
import EmployersEditor from "./emplyers-editor-page";

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
