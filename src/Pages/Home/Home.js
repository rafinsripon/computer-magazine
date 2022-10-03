import React from 'react';
// import { Outlet } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import News from '../../components/News/News';
import './Home.css';

const Home = () => {
    return (
        <>
            <Hero />
            <News />
        </>
    );
};

export default Home;