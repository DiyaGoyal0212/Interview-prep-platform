import {createBrowserRouter} from 'react-router-dom';
import App from "../App";
import Home from '../pages/homepage/Home';
import Login from '../pages/homepage/Login';
import Signup from '../pages/homepage/Signup';
import Resume from '../pages/Resume';
import Pricing from '../pages/Pricing';
import CppQuestions from '../pages/CppQuestions';
import JavaQuestions from '../pages/JavaQuestions';
import ReactQuestions from '../pages/ReactQuestions';
import InterviewOptions from '../pages/InterviewOptions';
import TextInterview from '../pages/TextInterview';


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
            },
            {
                path: "/resume",
                element: <Resume/>
            },
            {
                path: "/pricing",
                element: <Pricing/>
            },
            {
                path: "/cpp",
                element: <CppQuestions/>
            },
            {
                path: "/java",
                element: <JavaQuestions/>
            },
            {
                path: "/react",
                element: <ReactQuestions/>
            },
            {
                path: "/InterviewOptions",
                element: <InterviewOptions/>
            },
            {
                path: "/text-interview",
                element: <TextInterview/>
            },
        ]
    }
])

export default router;