import {createBrowserRouter} from "react-router-dom";

import Employers from "./employers-page";
import EmployersEditor from "./emplyers-editor-page";
import EmployersAddPage from "./employers-add-page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Employers/>,
    },
    {
        path: '/edit/:id',
        element: <EmployersEditor/>
    },
    {
        path: '/add',
        element: <EmployersAddPage/>
    }
])
