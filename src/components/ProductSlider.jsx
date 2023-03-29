import { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";


export const ProductSlider = ({slides}) => {
    const createSlide = (slide, index) => {
        return(
            <SwiperSlide key={index + 'slide'}>
                {slide}
            </SwiperSlide>
        )
    }

    return(
        <Swiper
            slidesPerView={6}
            navigation = {true}
            modules={[Navigation]}
        >
            {slides.map((slide, index) =>{
                return(
                    createSlide(slide, index)
                )
            })}
        </Swiper>
    )
}