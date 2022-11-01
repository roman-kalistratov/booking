import React from 'react';
import { CiMoneyBill } from "react-icons/ci";
import { GiAirBalloon, GiTrophyCup } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import './whyRTours.scss';
const WhyRTours = () => {
    return (
        <section className='whyRTours'>
            <h2 className='whyRTours__title'>Why book with R-tours?</h2>
            <div className="whyRTours__wrapper container">
                <div className="whyRTours__item">
                    <CiMoneyBill className='whyRTours__item-icon' />
                    <h3 className="whyRTours__item-title">
                        Ultimate flexibility
                    </h3>
                    <p className="whyRTours__item-text">You’re in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                </div>
                <div className="whyRTours__item">
                    <GiAirBalloon className='whyRTours__item-icon' />
                    <h3 className="whyRTours__item-title">
                        Memorable experiences
                    </h3>
                    <p className="whyRTours__item-text">Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
                </div>
                <div className="whyRTours__item">
                    <BsBookmarkStar className='whyRTours__item-icon' />
                    <h3 className="whyRTours__item-title">
                        Quality at our core
                    </h3>
                    <p className="whyRTours__item-text">High quality standards. Millions of reviews. A Tripadvisor company.</p>
                </div>
                <div className="whyRTours__item">
                    <GiTrophyCup className='whyRTours__item-icon' />
                    <h3 className="whyRTours__item-title">
                        Award-winning support
                    </h3>
                    <p className="whyRTours__item-text">New price? New plan? No problem. We’re here to help, 24/7.</p>
                </div>
            </div>


        </section>
    )
}

export default WhyRTours