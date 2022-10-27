import React, {useContext} from 'react';
import {NavLink, useLoaderData} from 'react-router-dom';
import SideNav from './SideNav';
import Course from './Course';
import {AuthContext} from '../../contexts/UserContext';

const Courses = () => {
    const courses = useLoaderData();
    const {isDark} = useContext(AuthContext);
    return (
        <div className={isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                            Let us find your

                            <strong className="block font-extrabold text-rose-700">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <NavLink
                                to={"/"}
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </NavLink>

                            <NavLink
                                to={"/"}
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-11/12 mx-auto flex flex-col lg:flex-row gap-5 p-10'>

                {/* Courses Lists */}
                <div className='w-full lg:w-1/4 border rounded-md text-lg'>
                    <h2 className='text-center'>Courses List</h2><hr />
                    {
                        courses.map(course => <SideNav
                            key={course.id}
                            course={course}
                        ></SideNav>)
                    }
                </div>

                {/* Courses Cards */}
                <div className='w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;