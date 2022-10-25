import React from 'react';
import {NavLink} from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-11/12 lg:w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-600 my-10">
            <h1 className="text-2xl font-bold text-center">Registration</h1>
            <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid" data-bitwarden-watching="1">
                <div className="space-y-1 text-sm">
                    <label for="username" className="block text-gray-400">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-500">Create an account</button>
            </form>

            <p className="text-xs text-center sm:px-6 text-gray-400">
                <span>Already have an account? </span>
                <NavLink to={"/"} className="underline text-gray-600">Sign in</NavLink>
            </p>
        </div>
    );
};

export default Register;