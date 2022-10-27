import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import {FaBars, FaMoon, FaSun} from 'react-icons/fa';
import {Drawer, ButtonToolbar, IconButton, Button} from 'rsuite';
import {AuthContext} from '../../contexts/UserContext';

const Header = () => {
    const {user, logOut, setUser, darkHandler, isDark} = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(() => {
                setUser(null);
            }).catch((error) => {
                console.log(error);
            });
    };

    const size = 'full';
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();

    const handleOpen = key => {
        setOpen(true);
        setPlacement(key);
    };

    return (
        <div className={isDark ? 'bg-gray-800 text-gray-100' : 'bg-blue-100 text-gray-900'}>
            <div className='w-full px-2 py-2 lg:w-11/12 mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-x-1 lg:gap-x-3'>
                    <NavLink to={"/home"} className="flex items-center gap-x-1 lg:gap-x-3 hover:no-underline">
                        <img src={logo} alt="logo" className='w-10 lg:w-16' />
                        <h1 className='text-base lg:text-2xl font-bold'>SCHOOLING.COM</h1>
                    </NavLink>
                </div>
                <div className='hidden lg:flex items-center gap-x-3 text-xl'>
                    <NavLink to={"/home"} className="hover:underline-offset-4">Home</NavLink>
                    <NavLink to={"/courses"} className="hover:underline-offset-4">Courses</NavLink>
                    <NavLink to={"/faq"} className="hover:underline-offset-4">FAQ</NavLink>
                    <NavLink to={"/blog"} className="hover:underline-offset-4">Blog</NavLink>
                </div>
                <div className='flex items-center gap-x-2 lg:gap-x-5'>

                    <label htmlFor="dark-light" className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-3xl">
                        <input onClick={darkHandler} id="dark-light" type="checkbox" className="hidden peer" />
                        <span className="px-1 py-1 bg-yellow-600 peer-checked:bg-gray-300 rounded-3xl">
                            <FaSun></FaSun>
                        </span>
                        <span className="px-1 py-1 bg-gray-300 peer-checked:bg-gray-600 rounded-3xl">
                            <FaMoon className='text-white'></FaMoon>
                        </span>
                    </label>

                    {
                        user?.uid
                            ? <NavLink to={"/user"}><img src={user.photoURL} alt="user_photo" className='w-8 h-8 rounded-full' title={user.displayName} /></NavLink>
                            : ""
                    }

                    <div className='hidden lg:block'>
                        {
                            user?.uid
                                ?
                                <Button onClick={logOutHandler} appearance="primary" title="Logout">
                                    Log Out
                                </Button>
                                : <NavLink to={"/login"}><Button appearance='primary'>Login</Button></NavLink>
                        }
                    </div>


                    {/* Drawer for mobile device */}
                    <div className='lg:hidden'>
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

                                    <div>
                                        {
                                            user?.uid
                                                ?
                                                <Button onClick={logOutHandler} appearance="primary" title="Logout">
                                                    Log Out
                                                </Button>
                                                : <NavLink to={"/login"}><Button appearance='primary'>Login</Button></NavLink>
                                        }
                                    </div>
                                </div>
                            </Drawer.Body>
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;