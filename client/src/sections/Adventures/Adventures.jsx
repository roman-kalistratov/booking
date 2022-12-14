import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Divider, Spinner } from '../../components';
import { changeSymbol } from '../../utils/changeSymbol.js';
import './adventures.scss';
import { Link } from 'react-router-dom';

const Adventures = () => {
    const [activeCategory, setActiveCategory] = useState('Art & Culture');
    const [limit, setLimit] = useState(4);

    const { data, loading, error } = useFetch(`/tours/getByCategory?category=${changeSymbol(activeCategory)}&limit=${limit}`);

    const handleClickTab = (e) => {
        setActiveCategory(e.target.textContent);
        setLimit(4);
    }

    return (
        <section className='adventures container'>
            <h2 className='adventures__title'>Adventures <br/> All Around The World</h2>
            <h3 className='adventures__subtitle'>Discover unforgettable travel experiences</h3>
            <Divider />
            <div className="adventures__tabs">
                <ul className="adventures__btns">
                    {
                        ['Art & Culture', 'Food & Drink', 'Outdoor Activities', 'Unique Experiences', 'Seasonal & Special'].map((item, i) =>
                            <li key={i} className={`adventures__btns-item ${activeCategory === item ? "active" : ""}`} onClick={handleClickTab}>
                                {item}
                            </li>
                        )}
                </ul>

                <ul className="adventures__content">
                    <li className="adventures__content-item active">
                        <ul className="adventures__content-inner">
                            {
                                data.map((item) => (
                                    <Link to={`/tours/${item._id}`} className='adventures__content-inner-item'>
                                        <img className='adventures__content-img' src={`/uploads/Tours/${item.photos[0]}`} alt="img" />
                                        {item.title}
                                    </Link>
                                ))
                            }
                        </ul>
                    </li>

                    <button style={{ "margin": "auto" }} className='btn' type='button' onClick={() => setLimit(limit + 4)}>show more</button>
                </ul>

            </div>
        </section>
    )
}

export default Adventures