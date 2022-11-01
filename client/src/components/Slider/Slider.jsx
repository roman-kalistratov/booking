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
<<<<<<< HEAD
            <Swiper
=======
            <Swiper               
>>>>>>> 2031566a291b7639509660793bfa653db95be360
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
<<<<<<< HEAD
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
=======
                className="mySwiper2"
            >
               <SwiperSlide>
                    <img src={images.slide1} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide2} alt="slide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide3} alt="slide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide4} alt="slide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide5} alt="slide"/>
>>>>>>> 2031566a291b7639509660793bfa653db95be360
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
<<<<<<< HEAD
                speed={700}
=======
                speed={700}                
>>>>>>> 2031566a291b7639509660793bfa653db95be360
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
<<<<<<< HEAD
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
=======
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={images.slide1} alt="slide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide2} alt="slide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide3} alt="slide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide4} alt="slide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.slide5} alt="slide"/>
>>>>>>> 2031566a291b7639509660793bfa653db95be360
                </SwiperSlide>
            </Swiper>
        </>
    )
}



<<<<<<< HEAD
const TopToursSlider = () => {
    return (
        <>
            <Swiper
                speed={700}
                dir="rtl"
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={4}
                navigation={true}
                modules={[Navigation]}
                className="topToursSlider"
            >
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <p className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</p>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <p className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</p>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <p className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</p>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <p className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</p>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='toursItem'>
                        <div className="toursItem__img" style={{ backgroundImage: `url(${images.slide4})` }}></div>
                        <div className="toursItem__inner">
                            <h2 className='toursItem__title'>Madrid</h2>
                            <p className="toursItem__subtitle">A ticket to experience the best of one or two Disney® theme parks in Paris</p>

                            <div className="toursItem__info">
                                <h4 className='toursItem__info-days'>7 DAYS 6 NIGHTS</h4>
                                <h3 className='toursItem__info-price'>from <span>100$</span></h3>
                            </div>

                            <button className='toursItem__btn' type="button">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                


            </Swiper>
        </>
    )
}

export default { HeaderSlider, TopToursSlider }
=======





const Slider2 = () => {
    return (
        <div>Slider2</div>
    )
}

export default { HeaderSlider, Slider2 }
>>>>>>> 2031566a291b7639509660793bfa653db95be360

