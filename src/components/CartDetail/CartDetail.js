import React from 'react';
import './CartDetail.css';
import { useParams } from 'react-router-dom';
import { hero } from '../../dummyData';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaLinkedinIn} from "react-icons/fa";
// {
//     details.desc.map(p => console.log(p))
// }
const CartDetail = () => {
    const {detailId} = useParams();
    const details = hero.find(detail => detail.id === parseInt(detailId));
    // console.log(details);
    const {cover, authorImg, title, time, authorName} = details;
    return (
        <section className='single-main-section'>
            <div className="container">
                <div className='single_main px-3 mt-10'>
                    <h2 className='text-4xl font-extrabold'>{title}</h2>
                    <div className="author flex items-center gap-2 mt-6">
                        <span className='text-lg font-semibold'>by</span>
                        <img className='w-16 h-16 rounded-full' src={authorImg} alt="" />
                        <span className='text-lg font-semibold'>{authorName}</span>
                        <span className='text-gray-400 text-lg font-semibold'>{time}</span>
                    </div>
                    <div className="social flex gap-4 mt-6">
                        <div className="social-box bg-blue-700 px-4 py-2 text-white">
                            <span className='flex gap-2 items-center'><FaFacebookF />Facebook</span>
                        </div>
                        <div className="social-box bg-purple-600 px-4 py-2 text-white">
                            <span className='flex gap-2 items-center'><FaTwitter />Twitter</span>
                        </div>
                        <div className="social-box bg-pink-600 px-4 py-2 text-white">
                            <span className='flex gap-2 items-center'><FaPinterestP />Pinterest</span>
                        </div>
                        <div className="social-box bg-cyan-600 px-4 py-2 text-white">
                            <span className='flex gap-2 items-center'><FaInstagram />Instagram</span>
                        </div>
                        <div className="social-box bg-orange-600 px-4 py-2 text-white">
                            <span className='flex gap-2 items-center'><FaLinkedinIn />Linkedin</span>
                        </div>
                    </div>
                    <div className="desc_top">
                        {
                            details.desc.map((d) => {
                                return (
                                    <div className='mt-4'>
                                        <p className='text-lg font-semibold text-gray-800'>{d.para1}</p>
                                        <p className='text-lg font-semibold text-gray-800'>{d.para2}</p>
                                    </div>
                                )
                            })
                        }
                        <img className='rounded-lg h-[400px] w-full' src={cover} alt="" />
                    </div>
                    <div className="discription_bottom">
                        {
                            details.details.map((d) => {
                                return (
                                    <div className='mt-8'>
                                        <h2 className='text-3xl font-bold'>{d.title}</h2>
                                        <p className='text-lg font-semibold text-gray-800'>{d.para1}</p>
                                        <h3 className='quote text-2xl font-semibold border-l-4 border-pink-700'>{d.quote}</h3>
                                        <p className='text-lg font-semibold text-gray-800'>{d.para2}</p>
                                        <p className='text-lg font-semibold text-gray-800'>{d.para3}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="site-main">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis id esse, at doloribus accusantium error. Debitis ratione necessitatibus veritatis impedit?</h2>
                </div>
            </div>
        </section>
    );
};

export default CartDetail;