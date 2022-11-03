import React, { useState } from 'react';
import { Divider } from '../../components';
import { images } from "../../constants";

import './adventures.scss';

const Adventures = () => {
    const [tabActive, setTabActive] = useState("Hiking & Trekking");

    return (
        <section className='adventures container'>
            <h2 className='whyRTours__title'>Adventures All Around The World</h2>
            <h3 className='whyRTours__subtitle'>Discover unforgettable travel experiences</h3>
            <Divider />
            <div className="adventures__tabs">
                <ul className="adventures__btns">
                    {
                        ['Hiking & Trekking', 'River Cruises', 'Safari', 'Explore Europe', 'Popular Adventure'].map((item) => 
                            <li key={item} className={`adventures__btns-item ${tabActive === item ? "active" : ""}`} onClick={(e) => (setTabActive(e.target.textContent))}>
                                {item}
                            </li>
                        )}                   
                </ul>

                <ul className="adventures__content">
                    <li className={`adventures__content-item ${tabActive === "Hiking & Trekking" ? "active" : ""}`} >
                        <ul className="adventures__content-inner">
                            <li className='adventures__content-inner-item'>
                                <img className='adventures__content-img' src={images.slide1} alt="img" />
                                Nepal
                            </li>
                            <li className='adventures__content-inner-item'>
                                <img className='adventures__content-img' src={images.slide1} alt="img" />
                                Everest Base Camp
                            </li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Machu Pichu</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Kilimanjaro</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Spain</li>
                        </ul>
                    </li>

                    <li className={`adventures__content-item ${tabActive === "River Cruises" ? "active" : ""}`} >
                        <ul className="adventures__content-inner">
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Nile</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Danube</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Rhine</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Main</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Mekong</li>
                        </ul>
                    </li>

                    <li className={`adventures__content-item ${tabActive === "Safari" ? "active" : ""}`} >
                        <ul className="adventures__content-inner">
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Africa</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Tanzania</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Kenya</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />South Africa</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Botswana</li>
                        </ul>
                    </li>

                    <li className={`adventures__content-item ${tabActive === "Explore Europe" ? "active" : ""}`} >

                        <ul className="adventures__content-inner">
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Train & Rail</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />River Cruise</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Bicycle</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Budget</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Family</li>
                        </ul>
                    </li>

                    <li className={`adventures__content-item ${tabActive === "Popular Adventure" ? "active" : ""}`} >

                        <ul className="adventures__content-inner">
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Sailing</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Festival & Events</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Food & Culinary</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Cultural</li>
                            <li className='adventures__content-inner-item'><img className='adventures__content-img' src={images.slide1} alt="img" />Bicycle</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Adventures