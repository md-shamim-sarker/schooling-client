import React from 'react';
import {NavLink} from 'react-router-dom';

const Course = ({course}) => {
    const {id, title, image, } = course;
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
            <img src={image.thumbnail} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                    <p className="text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">
                    <NavLink to={`/course/id/${id}`}>Course Details</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Course;