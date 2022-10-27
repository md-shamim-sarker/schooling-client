import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/UserContext';


const FAQ = () => {
    const {isDark} = useContext(AuthContext);
    return (
        <section className={isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}>
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p className="mt-1 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                    </div>
                    <div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p className="mt-1 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                    </div>
                    <div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p className="mt-1 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                    </div>
                    <div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p className="mt-1 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;