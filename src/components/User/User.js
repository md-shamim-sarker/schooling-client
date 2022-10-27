import React, {useContext} from 'react';
import {FaUser} from 'react-icons/fa';
import {AuthContext} from '../../contexts/UserContext';

const User = () => {
    const {user, isDark} = useContext(AuthContext);

    return (
        <div className={isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}>
            {
                user?.uid
                    ? <div className='w-full flex flex-col justify-center items-center text-center py-10'>
                        <h2>User Details</h2> <hr />
                        {
                            user.photoURL
                                ? <img src={user.photoURL} alt="user_photo" className='w-40 h-40 rounded-full mb-8' />
                                : <FaUser className='w-40 h-40 rounded-full mb-8 border'></FaUser>
                        }
                        <h4>
                            Name: {user.displayName} <br />
                            Email: {user.email}
                        </h4>
                    </div>
                    : <h2 className='text-center py-40'>Please Login First</h2>
            }
        </div>
    );
};

export default User;