import React from 'react';
import { useParams } from 'react-router-dom';
import { popular } from '../../dummyData';

const NewsDetail = () => {
    const {newsId} = useParams();
    const newsDetails = popular.find(news => news.id === parseInt(newsId))
    // console.log(newsDetails);
    const {desc, title, cover, authorImg, authorName} = newsDetails;
    return (
        <section className='single-main-section'>
            <div className="container">
                <div className="single_main px-3 mt-10">
                <h2 className='text-4xl font-extrabold'>{title}</h2>
                    <div className="mt-6">
                        <span className='text-lg font-semibold'>by</span>
                        <img className='w-16 h-16 rounded-full' src={authorImg} alt="" />
                        <span className='text-lg font-semibold'>{authorName}</span>
                        <img className='w-full h-[250px]' src={cover} alt="" />
                        <span className='text-gray-400 text-lg font-semibold'>{desc}</span>
                    </div>
                </div>
                <div className="site-main">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis id esse, at doloribus accusantium error. Debitis ratione necessitatibus veritatis impedit?</h2>
                </div>
            </div>
        </section>
    );
};

export default NewsDetail;