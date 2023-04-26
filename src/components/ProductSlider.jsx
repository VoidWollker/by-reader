import { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import "../css/ProductSlider.css"

export const ProductSlider = ({slides, slidesPerView, style, className}) => {
    const createSlide = (slide, index) => {
        return(
            <SwiperSlide key={index + 'slide'}>
                {slide}
            </SwiperSlide>
        )
    }

    return(
        <div className={className} style={style}>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={100}
                navigation = {true}
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