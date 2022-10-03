import React, { useState } from 'react';
import { hero } from '../../dummyData';
import Cart from '../Cart/Cart';
import './Hero.css';

const Hero = () => {
    const [items, setItems] = useState(hero);
    return (
        <>
            <section className='hero my-8' >
                <div className="container">
                {
                    items.map(item => <Cart 
                    key={item.id}
                    setItem={setItems}
                    item={item}/>)
                }
                </div>
            </section>
        </>
    );
};

export default Hero;