import React from 'react';
import {NavLink, useLoaderData} from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const {id, image, title, brief, details, features} = course;
    return (
        <div>
            <section
                style={{backgroundImage: `url(${image.banner})`}}
                className="relative bg-cover bg-center bg-no-repeat">
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <div className='flex justify-center lg:justify-start my-7'>
                            <img src={image.logo} alt="logo" className='w-36 h-36' />
                        </div>
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            You Choose
                            <strong className="block font-extrabold text-rose-700">
                                {title}
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            {brief}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <NavLink
                                to={`/checkout/id/${id}`}
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Premium
                            </NavLink>

                            <NavLink
                                to={"/"}
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Download Course Details
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <div className='w-4/5 mx-auto my-10'>
                <h3>Course Details:</h3><hr />
                <p>{details}</p>
            </div>

            <div className='w-4/5 mx-auto my-10'>
                <h3>Course Features:</h3> <hr />
                {
                    features.map((feature, index) => <li key={index}>{feature}</li>)
                }
            </div>
        </div>
    );
};

export default CourseDetails;