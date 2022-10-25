import React from 'react';
import {NavLink} from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-11/12 lg:w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-blue-50 text-gray-600 my-5 lg:my-10">
            <h1 className="text-2xl font-bold text-center">Registration</h1>
            <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid" data-bitwarden-watching="1">
                <div className="space-y-1 text-sm">
                    <label for="fullName" className="block text-gray-400">Full Name</label>
                    <input type="text" name="fullName" id="fullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                </div>

                <div className="space-y-1 text-sm">
                    <label for="photoURL" className="block text-gray-400">Photo URL</label>
                    <input type="photoURL" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                </div>

                <div className="space-y-1 text-sm">
                    <label for="regEmail" className="block text-gray-400">Email</label>
                    <input type="email" name="regEmail" id="regEmail" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                </div>

                <div className="space-y-1 text-sm">
                    <label for="regPassword" className="block text-gray-400">Password</label>
                    <input type="password" name="regPassword" id="regPassword" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                </div>

                <div className="space-y-1 text-sm">
                    <label for="confirmPassword" className="block text-gray-400">Password Confirmation</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Password Confirmation" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-500">Create an account</button>
            </form>

            <p className="text-xs text-center sm:px-6 text-gray-400">
                <span>Already have an account? </span>
                <NavLink to={"/login"} className="underline text-gray-600">Sign in</NavLink>
            </p>
        </div>
    );
};

export default Register;