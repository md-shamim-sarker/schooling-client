import React from 'react';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-11/12 lg:w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-600 my-5 lg:my-10">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid" data-bitwarden-watching="1">
                <div className="space-y-1 text-sm">
                    <label for="username" className="block text-gray-400">Email</label>
                    <input type="email" name="username" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                    <div className="flex justify-end text-xs text-gray-400">
                        <NavLink to={"/"}>Forgot Password?</NavLink>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-500">Sign in</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button aria-label="Log in with Google" className="p-3 rounded-sm">
                    <FaGoogle className='w-4 h-4'></FaGoogle>
                </button>
                <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                    <FaGithub className='w-4 h-4'></FaGithub>
                </button>
                <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
                    <FaFacebook className='w-4 h-4'></FaFacebook>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 text-gray-400">
                <span>Don't have an account? </span>
                <NavLink to={"/register"} className="underline text-gray-600">Sign up</NavLink>
            </p>
        </div>
    );
};

export default Login;