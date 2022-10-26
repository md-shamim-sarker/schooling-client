import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Checkout from '../components/Checkout/Checkout';
import CourseDetails from '../components/Courses/CourseDetails';
import Courses from '../components/Courses/Courses';
import Errorpage from '../components/Errorpage/Errorpage';
import FAQ from '../components/FAQ/FAQ';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import User from '../components/User/User';
import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/courses",
                loader: () => fetch('https://schooling-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: "/course/id/:id",
                loader: ({params}) => {
                    return fetch(`https://schooling-server.vercel.app/course/id/${params.id}`);
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/checkout/id/:id",
                loader: ({params}) => {
                    return fetch(`https://schooling-server.vercel.app/checkout/id/${params.id}`);
                },
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: "/user",
                element: <User></User>
            }
        ],
        errorElement: <Errorpage></Errorpage>
    }
]);

export default router;