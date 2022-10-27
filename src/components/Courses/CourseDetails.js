import React, {createRef, useContext} from 'react';
import {FaStar, FaThumbsUp} from 'react-icons/fa';
import {NavLink, useLoaderData} from 'react-router-dom';
import Pdf from "react-to-pdf";
import {AuthContext} from '../../contexts/UserContext';

const ref = createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    const {id, image, title, brief, details, features, stars, ratings, likes, price, enrolled, instructor} = course;
    const {isDark} = useContext(AuthContext);

    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [11, 8]
    };

    return (
        <div>
            <section
                style={{backgroundImage: `url(${image.banner})`}}
                className="relative bg-cover bg-center bg-no-repeat">
                <div
                    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <div className='flex justify-center lg:justify-start my-7'>
                            <img src={image.logo} alt="logo" className='w-36 h-36' />
                        </div>
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                            You Choose
                            <strong className="block font-extrabold text-rose-700">
                                {title}
                            </strong>
                        </h1>

                        <p className='my-3 text-white'> {brief}</p>

                        <div className='flex justify-center lg:justify-start items-center gap-x-2 text-white'>
                            <img src={instructor.ins_image} alt="ins_image" className='w-10 h-10 rounded-full' />
                            <strong>{instructor.ins_name}</strong>
                        </div>

                        <div className='flex justify-center lg:justify-start items-center gap-x-6 mt-3 text-white'>
                            <div className='flex items-center gap-x-2'><FaStar className='text-orange-600'></FaStar>{stars}</div>
                            <p>Total: {ratings}</p>
                            <div className='flex items-center gap-x-2'>
                                <FaThumbsUp className='text-blue-600'></FaThumbsUp>{likes}%
                            </div>
                        </div>

                        <h5 className='text-white mt-3'>Price: ${price}</h5>
                        <h5 className='text-white mt-3'>Already Enrolled {enrolled}</h5>

                        <div className="mt-4 flex flex-wrap gap-4 text-center">
                            <NavLink
                                to={`/checkout/id/${id}`}
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto hover:no-underline hover:text-white">
                                Get Premium
                            </NavLink>

                            <div className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">

                                <Pdf targetRef={ref} filename="course_details.pdf" options={options}>
                                    {({toPdf}) => <button onClick={toPdf}>Download Course Details</button>}
                                </Pdf>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}>
                <div ref={ref} className="w-11/12 lg:w-3/5 mx-auto">
                    <div className='py-10'>
                        <h3>Course Details:</h3><hr />
                        <p className='ml-5'>{details}</p>
                    </div>

                    <div className='py-10'>
                        <h3>Course Features:</h3> <hr />
                        {
                            features.map((feature, index) => <li key={index}>{feature}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;