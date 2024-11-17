import {createBrowserRouter} from "react-router-dom";

import Employers from "./employers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Employers/>
    }
])
