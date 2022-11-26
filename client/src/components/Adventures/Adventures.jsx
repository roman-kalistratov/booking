import React, { useState } from 'react';
import reFetch from '../../hooks/useFetch';
import { Divider } from '../../components';
import { changeSymbol } from '../../utils/changeSymbol.js';
import './adventures.scss';

const Adventures = () => {
    const [activeCategory, setActiveCategory] = useState('Art & Culture');
    const [limit, setLimit] = useState(4);

    const { data, loading, error } = reFetch(`/tours?category=${changeSymbol(activeCategory)}&limit=${limit}`);
   

    const handleClickTab = (e) => {
        setActiveCategory(e.target.textContent);
        setLimit(4);
    }
    
    return (
        <section className='adventures container'>
            <h2 className='whyRTours__title'>Adventures All Around The World</h2>
            <h3 className='whyRTours__subtitle'>Discover unforgettable travel experiences</h3>
            <Divider />
            <div className="adventures__tabs">
                <ul className="adventures__btns">
                    {
                        ['Art & Culture', 'Food & Drink', 'Outdoor Activities', 'Unique Experiences', 'Seasonal & Special'].map((item) =>
                            <li key={item} className={`adventures__btns-item ${activeCategory === item ? "active" : ""}`} onClick={handleClickTab}>
                                {item}
                            </li>
                        )}
                </ul>

                <ul className="adventures__content">
                    {loading ? (
                        <li className="adventures__content-item" >
                            <ul className="adventures__content-inner">
                                {
                                    data.map((item) => (
                                        <li className='adventures__content-inner-item'>
                                            <img className='adventures__content-img' src={`/uploads/Tours/${item.photos[0]}`} alt="img" />
                                            {item.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ) : (
                        <li className="adventures__content-item active">
                            <ul className="adventures__content-inner">
                                {
                                    data.map((item) => (
                                        <li className='adventures__content-inner-item'>
                                            <img className='adventures__content-img' src={`/uploads/Tours/${item.photos[0]}`} alt="img" />
                                            {item.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    )} 
                    <button style={{"margin":"auto"}} className='btn' type='button' onClick={() => setLimit(limit + 4)}>show more</button>                  
                </ul>
            </div>
        </section>
    )
}

export default Adventures