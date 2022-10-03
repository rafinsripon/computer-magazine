import React from 'react';
import logo from '../../image/logo-1.png';
import banner from '../../image/banner.png';

const Banner = () => {
    return (
        <>
            <section className='bg-red-100'>
                <div className="container flex justify-between items-center">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;









