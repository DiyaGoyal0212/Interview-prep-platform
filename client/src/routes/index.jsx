import {createBrowserRouter} from 'react-router-dom';
import App from "../App";
import Home from '../pages/homepage/Home';
import Login from '../pages/homepage/Login';
import Signup from '../pages/homepage/Signup';

const router = createBrowserRouter([
    {
        path : "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <Signup/>
            }
        ]
    }
])

export default router;