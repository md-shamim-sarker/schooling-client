import React, {useContext, useState} from 'react';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [message, setMessage] = useState("");
    const {
        signIn, signInWithGoogle, logOut,
        setUser, signInWithGithub,
        signInWithFacebook, isDark
    } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const notify = () => toast("Your mail isn't verified. Please verify your email first.");


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                if(!user.emailVerified) {
                    notify();
                    logOut().then(() => {
                        setUser(null);
                    }).catch((error) => {
                        console.log(error);
                    });
                    return;
                }
                console.log(user);
                form.reset();
                navigate(from, {replace: true});
            }).catch((error) => {
                setMessage(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={isDark ? 'bg-gray-900 text-gray-100 py-10' : 'bg-gray-100 text-gray-900 py-10'}>
            < div className="w-11/12 lg:w-full mx-auto max-w-md p-8 space-y-3 rounded-xl border" >
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-600 focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-gray-400">
                            <NavLink to={"/"}>Forgot Password?</NavLink>
                        </div>
                    </div>

                    <div className='text-red-600'>{message}</div>

                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-500">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle className='w-5 h-5'></FaGoogle>
                    </button>
                    <button onClick={handleGithubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub className='w-5 h-5'></FaGithub>
                    </button>
                    <button onClick={handleFacebookSignIn} aria-label="Log in with Facebook" className="p-3 rounded-sm">
                        <FaFacebook className='w-5 h-5'></FaFacebook>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-400">
                    <span>Don't have an account? </span>
                    <NavLink to={"/register"} className="underline text-gray-600">Sign up</NavLink>
                </p>
                <ToastContainer />
            </div >
        </div>
    );
};

export default Login;