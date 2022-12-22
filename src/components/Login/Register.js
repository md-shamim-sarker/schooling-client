import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [message, setMessage] = useState("");
    const [errEmail, setErrEmail] = useState('');
    const [errPass, setErrPass] = useState('');
    const navigate = useNavigate();

    const {createUser, updateUser, isDark} = useContext(AuthContext);

    // const notify = () => toast("A confirmation mail send to your account. Please, confirm!!");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                updateUser({
                    displayName: fullName,
                    photoURL: photoURL
                }).then(() => {
                    navigate("/login");
                }).catch((error) => {
                    console.log(error.message);
                });

                // logOut().then(() => {
                //     setUser(null);
                // }).catch((error) => {
                //     console.log(error);
                // });

                // sendUserEmailVerification().then(() => {
                //     notify();
                // });

                // form.reset();
                setMessage("Successfully Created Account.");
            })
            .catch((err) => {
                console.log(err.message);
                if(err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setErrEmail('');
                    setErrPass('Password should be at least 6 characters.');
                } else if(err.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setErrPass('');
                    setErrEmail('This authentication email already-in-use.');
                }
            });
    };

    return (
        <div className={isDark ? 'bg-gray-900 text-gray-100 py-10' : 'bg-gray-100 text-gray-900 py-10'}>
            <div className="w-11/12 lg:w-full mx-auto max-w-md p-8 space-y-3 rounded-xl border">
                <h1 className="text-2xl font-bold text-center">Registration</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="fullName" className="block text-gray-400">Full Name</label>
                        <input type="text" name="fullName" id="fullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block text-gray-400">Photo URL</label>
                        <input type="photoURL" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                        <small className='text-red-600'>{errEmail}</small>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="confirmPassword" className="block text-gray-400">Password Confirmation</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Password Confirmation" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                        <small className='text-red-600'>{errPass}</small>
                    </div>
                    <div>{message}</div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-500">Create an account</button>
                </form>

                <p className="text-xs text-center sm:px-6 text-gray-400">
                    <span>Already have an account? </span>
                    <NavLink to={"/login"} className="underline text-gray-600">Sign in</NavLink>
                </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;