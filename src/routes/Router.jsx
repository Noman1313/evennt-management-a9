import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CardDetails from "../pages/Home/CardDetails";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/home',
                element: <PrivateRoute><Home></Home></PrivateRoute>,
                loader: () => fetch('/fakeData.json')
            },
            {
                path:'/cardDetails/:id',
                element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: () => fetch('/fakeData.json')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default router;