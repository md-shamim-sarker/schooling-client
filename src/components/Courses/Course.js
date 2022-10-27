import React, {useContext} from 'react';
import {FaStar, FaThumbsUp} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import {Button} from 'rsuite';
import {AuthContext} from '../../contexts/UserContext';

const Course = ({course}) => {
    const {id, title, image, instructor, stars, likes, price} = course;
    const {isDark} = useContext(AuthContext);
    return (
        <div className={isDark ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}>
            <div className='border rounded-md overflow-hidden'>
                <img src={image.thumbnail} alt="image_thumbnail" />
                <div className='p-4 leading-8'>
                    <h4>{title}</h4>
                    <strong>Instructor: {instructor.ins_name}</strong><br />
                    <h5 className='text-blue-600'>Price: ${price}</h5>
                    <div className='flex items-center gap-x-2 justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <FaStar className='text-orange-600'></FaStar>{stars}
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <FaThumbsUp className='text-blue-600'></FaThumbsUp>{likes}%
                        </div>
                    </div>
                    <NavLink to={`/course/id/${id}`} className="hover:no-underline">
                        <Button appearance='primary' block>Course Details</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Course;