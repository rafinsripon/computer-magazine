import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({item}) => {
    const {id, cover, catgeory, title, time, authorName} = item;
    return (
        <>
            <div className="box relative p-6">
                <img className='w-full h-full object-cover absolute top-0 left-0 -z-10' src={cover} alt="" />
                <div className="text absolute bottom-8">
                    <Link to={`/details/${id}`}>
                        <span className='catgeory text-white font-semibold text-lg'>{catgeory}</span>
                        <h2 className='text-white text-2xl font-extrabold py-3'>{title}</h2>
                        <div className="author text-gray-200 font-semibold">
                            <span>{authorName}</span>
                            <span>{time}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cart;