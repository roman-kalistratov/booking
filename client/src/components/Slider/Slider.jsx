import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay, Navigation, EffectFade } from "swiper";
import { images } from "../../constants";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/effect-fade';

import './slider.scss';

const HeaderSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                speed={700}
                loop={true}
                effect={'fade'}
                centeredSlides={true}
                navigation={true}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: true,
                // }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Autoplay, FreeMode, Navigation, EffectFade, Thumbs]}
                className="headerSlider">

                {headerSliderData.map((slide) =>
                    <SwiperSlide key={slide.title}>
                        <img src={slide.img} alt={`slide img ${slide.title}`} />
                        <h1 className="slide-title">
                            {slide.title}
                        </h1>
                        <h2 className="slide-subtitle">
                            {slide.category}
                        </h2>
                    </SwiperSlide>
                )}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                speed={700}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="headerSlider-thumbs">

                {
                    headerSliderData.map((slide) =>
                        <SwiperSlide key={slide}>
                            <img src={slide.img} alt="slide" />
                        </SwiperSlide>
                    )}
            </Swiper>
        </>
    )
}



const TopToursSlider = () => {
    return (
        <>
            <Swiper
                speed={1000}
                loop={true}
                // autoplay={{
                //     delay: 4500,
                //     disableOnInteraction: false,
                // }}                
                freeMode={true}
                spaceBetween={30}
                slidesPerView={4}
                modules={[Autoplay, FreeMode]}
                className="topToursSlider">               

                {toursSliderData.map((tour) => 
                        
                        <SwiperSlide key={tour.title}>
                        <div className='toursItem'>
                        
                            <div className="toursItem__img" style={{ backgroundImage: `url(${tour.img})` }}></div>
                            <div className="toursItem__inner">
                                <h2 className='toursItem__title'>{tour.title}</h2>
                                <h4 className="toursItem__subtitle">{tour.subtitle}</h4>
    
                                <div className="toursItem__info">
                                    <h4 className='toursItem__info-days'>{tour.days}</h4>
                                    <h3 className='toursItem__info-price'>from <span>{tour.price}$</span></h3>
                                </div>
    
                                <button className='toursItem__btn btn' type="button">View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}


export default { HeaderSlider, TopToursSlider }

/*======= section data ======= */
const headerSliderData = [
    {
        title: "switzerland",
        category: "Top Destination",
        img: images.slide4
    },
    {
        title: "dubai",
        category: "Top Destination",
        img: images.slide2
    },
    {
        title: "amsterdam",
        category: "Top Destination",
        img: images.slide3
    },
    {
        title: "maldives",
        category: "Top Destination",
        img: images.slide1
    },
    {
        title: "vienna",
        category: "Top Destination",
        img: images.slide5
    }
];

const toursSliderData = [
    {
        img: images.slide4,
        title: "Madrid",
        subtitle: "A ticket to experience the best of one or two Disney® theme parks in Paris",
        days: "7 DAYS 6 NIGHTS",
        price: "100"
    },
    {
        img: images.slide4,
        title: "Madrid",
        subtitle: "A ticket to experience the best of one or two Disney® theme parks in Paris",
        days: "7 DAYS 6 NIGHTS",
        price: "100"
    },
    {
        img: images.slide4,
        title: "Madrid",
        subtitle: "A ticket to experience the best of one or two Disney® theme parks in Paris",
        days: "7 DAYS 6 NIGHTS",
        price: "100"
    },
    {
        img: images.slide4,
        title: "Madrid",
        subtitle: "A ticket to experience the best of one or two Disney® theme parks in Paris",
        days: "7 DAYS 6 NIGHTS",
        price: "100"
    },
    {
        img: images.slide4,
        title: "Madrid",
        subtitle: "A ticket to experience the best of one or two Disney® theme parks in Paris",
        days: "7 DAYS 6 NIGHTS",
        price: "100"
    },
    {
        img: images.slide4,
        title: "Madrid",
        subtitle: "A ticket to experience the best of one or two Disney® theme parks in Paris",
        days: "7 DAYS 6 NIGHTS",
        price: "100"
    }
]
