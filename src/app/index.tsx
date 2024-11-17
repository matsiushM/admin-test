import {
    RouterProvider,
} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'

import {router} from "pages";
import {store} from "./store";

const App = () => {
    return (
        <ReduxProvider store={store}>
            <RouterProvider router={router}/>
        </ReduxProvider>
    )
};

export default App