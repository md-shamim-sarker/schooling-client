import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/UserContext';

const User = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            {
                user?.uid
                    ? <div className='w-full flex flex-col justify-center items-center text-center my-10'>
                        <h2>User Details</h2> <hr />
                        <img src={user.photoURL} alt="user_photo" className='w-40 h-40 rounded-full mb-8' />
                        <h4>
                            Name: {user.displayName} <br />
                            Email: {user.email}
                        </h4>
                    </div>
                    : <div>
                        <h2>Login First</h2>
                    </div>
            }
        </div>
    );
};

export default User;