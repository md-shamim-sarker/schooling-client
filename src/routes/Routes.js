import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Courses from '../components/Courses/Courses';
import Errorpage from '../components/Errorpage/Errorpage';
import FAQ from '../components/FAQ/FAQ';
import Home from '../components/Home/Home';
import Main from '../layout/Main';

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
                element: <Courses></Courses>
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ],
        errorElement: <Errorpage></Errorpage>
    }
]);

export default router;