import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay, Navigation, EffectFade } from "swiper";
import { Link } from 'react-router-dom';
import { images } from "../../constants";
import useFetch from '../../hooks/useFetch';

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
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}                
                modules={[Autoplay, FreeMode, Navigation, EffectFade, Thumbs]}
                className="headerSlider"                
                >

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
                breakpoints={{                    
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    }                   
                  }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="headerSlider-thumbs">                    

                {
                    headerSliderData.map((slide,i) =>
                        <SwiperSlide key={slide.title}>
                            <img src={slide.img} alt="slide" />
                        </SwiperSlide>
                    )}
            </Swiper>
        </>
    )
}



const TopToursSlider = () => {
    const { data } = useFetch(`/tours/getByRating?rating=5`);
    return (
        <>
            <Swiper
                speed={700}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}       
                navigation={true}
                freeMode={false}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{                    
                    318: {
                      slidesPerView: 1,
                      navigation:false
                    },
                    480: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                   
                  }}
                modules={[Autoplay, Navigation, FreeMode]}
                className="topToursSlider">

                {data.map((tour) =>
                    <SwiperSlide key={tour.title}>
                        <div className='toursItem'>

                            <div className="toursItem__img" style={{ backgroundImage: `url(/uploads/Tours/${tour.photos[0]})` }}></div>
                            <div className="toursItem__inner">
                                <h2 className='toursItem__title'>{tour.title}</h2>
                                <h4 className="toursItem__subtitle">{tour.desc}</h4>

                                <div className="toursItem__info">
                                    <h4 className='toursItem__info-days'>{tour.days}</h4>
                                    <h3 className='toursItem__info-price'>from <span>{tour.price}$</span></h3>
                                </div>

                                <Link to={`/tours/${tour._id}`} className='toursItem__btn btn'>View Details</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

const TourSlider = ({photos}) => {
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
                modules={[Autoplay, FreeMode, Navigation, EffectFade, Thumbs]}
                className="tourSlider">

                {photos.map((item) =>
                    <SwiperSlide key={item}>
                        <img src={`/uploads/Tours/${item}`} alt={`slide-img-${item}`} />                        
                    </SwiperSlide>
                )}


            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                speed={700}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}       
                modules={[FreeMode, Navigation, Thumbs]}
                className="tourSlider-thumbs">

                {
                    photos.map((item) =>
                        <SwiperSlide key={item}>
                            <img src={`/uploads/Tours/${item}`} alt="item" />
                        </SwiperSlide>
                    )}
            </Swiper>
        </>
    )
}

export default { 
    HeaderSlider, 
    TopToursSlider, 
    TourSlider 
}

/*======= section data ======= */
const headerSliderData = [
    {
        title: "New York",
        category: "Top Destination",
        img: images.NewYork
    },
    {
        title: "Amsterdam",
        category: "Top Destination",
        img: images.Amsterdam
    },
    {
        title: "Dubai",
        category: "Top Destination",
        img: images.Dubai
    },
    {
        title: "Faro",
        category: "Top Destination",
        img: images.Faro
    },
    {
        title: "Florence",
        category: "Top Destination",
        img: images.Florence
    },
    {
        title: "Madrid",
        category: "Top Destination",
        img: images.Madrid
    },
    {
        title: "Maldives",
        category: "Top Destination",
        img: images.Maldives
    },
    {
        title: "Naples",
        category: "Top Destination",
        img: images.Naples
    },  
    {
        title: "Prague",
        category: "Top Destination",
        img: images.Prague
    },
    {
        title: "Rome",
        category: "Top Destination",
        img: images.Rome
    }
];
