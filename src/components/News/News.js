import React from 'react';
import { popular } from '../../dummyData';
import SingleNews from '../SingleNews/SingleNews';
import './News.css';

const News = () => {
    return (
        <main className='news-main'>
            <div className="container">
                <div className="main-contain">
                <div className="heading relative">
                        <h5>Latest News</h5>
                        <div className="news mt-8">
                        {
                            popular.map(news => <SingleNews
                            key={news.id}
                            news={news}
                            />)
                        }
                        </div>
                    </div>
                </div>
                <div className="side-contain">
                    <h2>hello site news</h2>
                </div>
            </div>
        </main>
    );
};

export default News;