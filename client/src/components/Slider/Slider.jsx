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
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, EffectFade, Thumbs]}
                className="headerSlider"
            >
                <SwiperSlide>
                    <img src={images.slide1} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide2} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide3} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide4} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide5} alt="slide" />
                </SwiperSlide>
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
                className="headerSlider-thumbs"
            >
                <SwiperSlide>
                    <img src={images.slide1} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide2} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide3} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide4} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide5} alt="slide" />
                </SwiperSlide>
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
                modules={[Autoplay,FreeMode]}  
                className="topToursSlider"
            >
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <h4 className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</h4>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <h4 className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</h4>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <h4 className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</h4>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <h4 className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</h4>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <h4 className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</h4>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                
                


            </Swiper>
        </>
    )
}

export default { HeaderSlider, TopToursSlider }

