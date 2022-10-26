import React, {useContext} from 'react';
import {useLoaderData} from 'react-router-dom';
import {Button} from 'rsuite';
import {AuthContext} from '../../contexts/UserContext';
import Swal from 'sweetalert2';

const Checkout = () => {
    const course = useLoaderData();
    const {user} = useContext(AuthContext);
    const {title, brief, image} = course;

    const alertHandler = () => {
        Swal.fire(
            'Good job!',
            'Purchase Successful',
            'success'
        );
    };

    return (
        <div className='w-4/5 mx-auto my-10'>
            <h2 className='text-center my-5'>Checkout Page</h2>
            <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                <div className='w-full h-full flex flex-col justify-center items-center p-5'>
                    <img src={image.thumbnail} alt="image_thumbnail" className='w-52 h-52' />
                    <h3>{title} <br /></h3>
                    <p className='my-5'>{brief}</p>
                    <Button onClick={alertHandler} appearance='primary'>Buy Now</Button>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center p-5'>
                    <img src={user.photoURL} alt="userImage" className='w-52 h-52' />
                    <h3>Name: {user.displayName}</h3> <br />
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;