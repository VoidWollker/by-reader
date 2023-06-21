import { Navigation} from 'swiper';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import "../css/ProductSlider.css"

export const ProductSlider = ({slides, slidesPerView, style, className}) => {
    const swiper = useSwiper()

    const createSlide = (slide, index) => {
        return(
            <SwiperSlide key={index + 'slide'}>
                {slide}
            </SwiperSlide>
        )
    }

    return(
        <div className={className} style={style}>
           <button className='prev-arrow' onClick={e => swiper.slidePrev()}>Prev</button>
           <button className='next-arrow' onClick={e => swiper.slideNext()}>Next</button>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={100}
                navigation = {{
                    nextEl: '.next-arrow',
                    prevEl: '.prev-arrow'
                }}
                modules={[Navigation]}
            >
                {slides.map((slide, index) =>{
                    return(
                        createSlide(slide, index)
                    )
                })}
            </Swiper> 
            
        </div>
    )
}