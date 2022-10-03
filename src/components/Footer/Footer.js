import React from 'react';
import logo from '../../image/logo-1.png';
import image1 from '../../image/blog-1.jpg';
import image2 from '../../image/blog-2.jpg';

import { FaBlenderPhone, FaInternetExplorer } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=' bg-slate-600 mt-8'>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
                <img src={logo} alt="" />
                <p className='text-base font-semibold text-gray-300'>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
                <div>
                <div className='flex items-center gap-2 mt-4'>
                    <span className='text-red-800 text-2xl'><FaInternetExplorer /></span>
                    <p className='text-white font-semibold'>rafinsripon@gmail.com</p>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <span className='text-pink-800 text-2xl'><FaBlenderPhone /></span>
                    <p className='text-white font-semibold'>+999 - 944453</p>
                </div>
                </div>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl uppercase font-bold'>Sports</h1>
                <div className="img-one flex items-center gap-4 mt-2">
                <img className='w-20 h-20' src={image1} alt="" />
                <p className='text-base font-semibold text-gray-300'>Google To Boost Android Security In Few Days</p>
                </div>  
                <div className="img-one flex items-center gap-4 mt-2">
                <img className='w-20 h-20' src={image2} alt="" />
                <p className='text-base font-semibold text-gray-300'>Google To Boost Android Security In Few Days</p>
                </div> 
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl uppercase font-bold'>Entertainment</h1>
                <div className="img-one flex items-center gap-4 mt-2">
                <img className='w-20 h-20' src={image1} alt="" />
                <p className='text-base font-semibold text-gray-300'>Google To Boost Android Security In Few Days</p>
                </div>  
                <div className="img-one flex items-center gap-4 mt-2">
                <img className='w-20 h-20' src={image2} alt="" />
                <p className='text-base font-semibold text-gray-300'>Google To Boost Android Security In Few Days</p>
                </div> 
            </div>
            <div className="lebels mt-4">
                <h2 className='text-2xl uppercase font-bold'>Levels</h2>
                <li className='list-none text-lg font-semibold border-l-4 border-pink-900 px-3 text-gray-300 mt-4'>Fashon</li>
                <li className='list-none text-lg font-semibold border-l-4 border-pink-900 px-3 text-gray-300 mt-4'>Boxing</li>
                <li className='list-none text-lg font-semibold border-l-4 border-pink-900 px-3 text-gray-300 mt-4'>Nature</li>
                <li className='list-none text-lg font-semibold border-l-4 border-pink-900 px-3 text-gray-300 mt-4'>Musics</li>
            </div>
            </div>
            <div className='bg-slate-600 flex justify-between p-4 border-t-2 border-gray-300 px-8 mt-2'>
                <div className="px-8">
                    <p className='text-lg font-semibold text-white'>© all rights reserved</p>
                </div>
                <div className="">
                    <p className='text-lg font-semibold text-white'>made with  by rafins ripon</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;