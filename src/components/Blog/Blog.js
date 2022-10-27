import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/UserContext';

const Blog = () => {
    const {isDark} = useContext(AuthContext);
    return (
        <section className={isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}>
            <div className="w-full lg:w-4/5 flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl py-5">Answer to the given questions</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is CORS?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                        </p>
                    </details>

                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why are you using firebase? What other options do you have to implement authentication?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            The Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br /> <br />
                            We have some alternative options to implement authentication without firebase. Example: Auth0, MongoDB, Passport, Okta, JSON Web Token, Keycloak, Amazon Cognito etc.
                        </p>
                    </details>

                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does the private route work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes, if he is authenticated (Logged in).</p>
                    </details>

                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            Node is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. <br /> <br />
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;