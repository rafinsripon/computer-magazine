import React from 'react';
import { Link } from 'react-router-dom';
import './SingleNews.css'

const SingleNews = ({news}) => {
    // console.log(news)
    const {desc, id, title, date, cover, authorImg, authorName} = news;
    return (
        <section className='flex gap-3'>
            <div className="single-news mb-8">
                <Link to={`/news/${id}`} className='p-url'>{title}</Link>
                <h3>{date}</h3>
                <span>{desc.slice(0, 100)}</span>
                <div className="author">
                    <div>
                        <img src={authorImg} alt="" />
                    </div>
                    <div>
                        <span>{authorName}</span>
                    </div>
                </div>
            </div>
            <div className="single-img">
                <img className='w-full' src={cover} alt="" />
            </div>
        </section>
    );
};

export default SingleNews;