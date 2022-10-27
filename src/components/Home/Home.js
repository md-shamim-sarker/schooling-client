import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import banner from '../../assets/schooling.svg';
import {AuthContext} from '../../contexts/UserContext';

const Home = () => {
    const {isDark} = useContext(AuthContext);

    return (
        <section className={isDark ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}>
            <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h2 className="text-4xl font-bold leading-none">
                        Shamim Sarker Home Page
                    </h2>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <NavLink to={"/"} className="px-8 py-3 text-lg font-medium rounded bg-violet-400 text-gray-900">Suspendisse</NavLink>
                        <NavLink to={"/"} className="px-8 py-3 text-lg font-medium border rounded border-gray-100">Malesuada</NavLink>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={banner} alt="banner_img" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Home;