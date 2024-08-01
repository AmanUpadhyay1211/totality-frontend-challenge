// components/Navbar.jsx
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/Redux/slices/authSlice';
import Image from 'next/image';
import { Logo } from '@/components/index';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="bg-transparent w-[100vw] text-white flex mx-auto justify-between  p-4 fixed z-50">
            <div className="container bg-blue-600 px-6 rounded-3xl flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <Logo height='70'/>
                    </div>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/about">
                        <div className="hover:text-yellow-500">About</div>
                    </Link>
                    <Link href="/contact">
                        <div className="hover:text-yellow-500">Contact</div>
                    </Link>
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image src={user.prefs.avatar} alt="User Avatar" width={40} height={40} />
                            </div>
                            <button onClick={handleLogout} className="hover:text-yellow-500">Logout</button>
                        </div>
                    ) : (
                        <Link href="/signin">
                            <div className="hover:text-yellow-500">Sign In</div>
                        </Link>
                    )}
                </div>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

