import React from 'react';
import { Slider, Divider } from '../../components';

const TopTours = () => {
    return (
        <section className='topTours container'>
            <h2 className='topTours__title'>Top Tours</h2>
            <h3 className="topTours__text">Choose Your Next Vacation</h3>
            <Divider />
            <Slider.TopToursSlider />
        </section>
    )
}

export default TopTours