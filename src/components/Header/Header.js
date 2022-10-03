import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt1, HiX } from "react-icons/hi";


const Header = () => {
    const [navbar, setnavbar] = useState(false);
    return (
        <>
            <div className='bg-gray-900 text-white p-4'>
            <nav className={navbar ? "navbar" : "container"} onClick={() => setnavbar(false)}>
                    <NavLink className='mr-2 ml-2 text-lg font-semibold hover:bg-pink-600 p-4 border-2 hover:border-pink-600 border-gray-900' to="/">Home</NavLink>
                    <NavLink className='mr-2 ml-2 text-lg font-semibold hover:bg-pink-600 p-4 border-2 hover:border-pink-600 border-gray-900' to="/culture">Culture</NavLink>
                    <NavLink className='mr-2 ml-2 text-lg font-semibold hover:bg-pink-600 p-4 border-2 hover:border-pink-600 border-gray-900' to="/sports">Sports</NavLink>
                    <NavLink className='mr-2 ml-2 text-lg font-semibold hover:bg-pink-600 p-4 border-2 hover:border-pink-600 border-gray-900' to="/memes">Memes</NavLink>
                    <NavLink className='mr-2 ml-2 text-lg font-semibold hover:bg-pink-600 p-4 border-2 hover:border-pink-600 border-gray-900' to="/political">Politics</NavLink>
                    <NavLink className='mr-2 ml-2 text-lg font-semibold hover:bg-pink-600 p-4 border-2 hover:border-pink-600 border-gray-900' to="/review">Review</NavLink>
                </nav>
                <button onClick={() => setnavbar(!navbar)} className='toggle-icon'>
                    {
                        navbar ? <HiX></HiX> : <HiMenuAlt1></HiMenuAlt1>
                    }
                </button>
            </div>
        </>
    );
};

export default Header;