import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/UserContext';


const FAQ = () => {
    const {isDark} = useContext(AuthContext);
    return (
        <section className={isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}>
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                <h2 className="mb-12 text-4xl leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3>What is Express.js?</h3>
                        <p className="mt-1">Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>
                    </div>
                    <div>
                        <h3>What is React.js?</h3>
                        <p className="mt-1">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
                    </div>
                    <div>
                        <h3>What is MongoDB?</h3>
                        <p className="mt-1">MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.</p>
                    </div>
                    <div>
                        <h3>What is TailwindCSS?</h3>
                        <p className="mt-1">Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;