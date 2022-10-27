import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        < section
            className="relative bg-[url(https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg)] bg-cover bg-center bg-no-repeat" >

            <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75"></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                        WELCOME TO
                        <strong className="block font-extrabold text-rose-700">
                            SCHOOLING.COM
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
                        The most popular online platform for learning in Bangladesh. Schooling.com confirms quality teaching in different topics.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <NavLink
                            to={"/home"}
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </NavLink>

                        <NavLink
                            to={"/home"}
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </NavLink>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Home;