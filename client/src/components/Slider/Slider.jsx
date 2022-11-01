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
                </SwiperSlide>
            </Swiper>
        </>
    )
}








const Slider2 = () => {
    return (
        <div>Slider2</div>
    )
}

export default { HeaderSlider, Slider2 }

