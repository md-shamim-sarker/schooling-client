import React, {useContext} from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import {AuthContext} from '../../contexts/UserContext';

const Footer = () => {
    const {isDark} = useContext(AuthContext);
    return (
        <footer className={`px-4 divide-y ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-blue-100 text-gray-900'}`}>
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <NavLink to={"/"} className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200">
                            <img src={logo} alt="logo" />
                        </div>
                        <span className="self-center text-2xl font-semibold">SCHOOLING.COM</span>
                    </NavLink>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-blue-600 text-xl">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <NavLink >Features</NavLink>
                            </li>
                            <li>
                                <NavLink >Integrations</NavLink>
                            </li>
                            <li>
                                <NavLink >Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink >FAQ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-blue-600 text-xl">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <NavLink >Privacy</NavLink>
                            </li>
                            <li>
                                <NavLink >Terms of Service</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-blue-600 text-xl">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <NavLink>Public API</NavLink>
                            </li>
                            <li>
                                <NavLink>Documentation</NavLink>
                            </li>
                            <li>
                                <NavLink>Guides</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-blue-600 text-xl">Social media</h3>
                        <div className="flex justify-start space-x-3">
                            <NavLink title="Facebook" className="flex items-center p-1">
                                <FaFacebook className='text-xl'></FaFacebook>
                            </NavLink>
                            <NavLink title="Twitter" className="flex items-center p-1">
                                <FaTwitter className='text-xl'></FaTwitter>
                            </NavLink>
                            <NavLink title="Instagram" className="flex items-center p-1">
                                <FaInstagram className='text-xl'></FaInstagram>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-blue-600">© All rights reserved | Shamim Sarker | 2022</div>
        </footer>
    );
};

export default Footer;