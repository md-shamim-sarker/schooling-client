import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import {FaBars, FaMoon, FaSun} from 'react-icons/fa';
import {Drawer, ButtonToolbar, IconButton} from 'rsuite';

const Header = () => {
    const size = 'full';
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();

    const handleOpen = key => {
        setOpen(true);
        setPlacement(key);
    };

    return (
        <div className='bg-blue-100 py-1'>
            <div className='w-full px-2 py-2 lg:w-4/5 mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-x-1 lg:gap-x-3'>
                    <img src={logo} alt="logo" className='w-10 lg:w-16' />
                    <h1 className='text-base lg:text-2xl font-bold'>SCHOOLING.COM</h1>
                </div>
                <div className='hidden lg:flex items-center gap-x-3 text-xl'>
                    <NavLink to={"/home"} className="hover:underline-offset-4">Home</NavLink>
                    <NavLink to={"/courses"} className="hover:underline-offset-4">Courses</NavLink>
                    <NavLink to={"/faq"} className="hover:underline-offset-4">FAQ</NavLink>
                    <NavLink to={"/blog"} className="hover:underline-offset-4">Blog</NavLink>
                </div>
                <div className='flex items-center gap-x-2 lg:gap-x-5'>
                    <label for="dark-light" className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-3xl">
                        <input id="dark-light" type="checkbox" className="hidden peer" />
                        <span className="px-1 py-1 bg-yellow-600 peer-checked:bg-gray-300 rounded-3xl">
                            <FaSun></FaSun>
                        </span>
                        <span className="px-1 py-1 bg-gray-300 peer-checked:bg-gray-600 rounded-3xl">
                            <FaMoon className='text-white'></FaMoon>
                        </span>
                    </label>
                    <button className=''>
                        <NavLink to={"/"} className='bg-blue-700 hover:bg-blue-600 text-blue-50 px-2 lg:px-4 py-[6.5px] lg:py-2 rounded-md hover:text-blue-50 hover:no-underline'>Login</NavLink>
                    </button>

                    {/* Drawer for mobile device */}
                    <ButtonToolbar>
                        <IconButton icon={<FaBars />} onClick={() => handleOpen('right')}>
                        </IconButton>
                    </ButtonToolbar>
                    <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
                        <Drawer.Header>
                            <Drawer.Title>
                                <span className='text-lg'>SCHOOLING.COM</span>
                            </Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <div>
                                <NavLink to={"/home"} className="hover:underline-offset-4">Home</NavLink> <hr />
                                <NavLink to={"/courses"} className="hover:underline-offset-4">Courses</NavLink><hr />
                                <NavLink to={"/faq"} className="hover:underline-offset-4">FAQ</NavLink> <hr />
                                <NavLink to={"/blog"} className="hover:underline-offset-4">Blog</NavLink> <hr />
                            </div>
                        </Drawer.Body>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default Header;