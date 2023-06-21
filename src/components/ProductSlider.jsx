import { Navigation} from 'swiper';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import "../css/ProductSlider.css"

export const ProductSlider = ({slides, slidesPerView, style, className, elementID}) => {
    const swiper = useSwiper()

    const createSlide = (slide, index) => {
        return(
            <SwiperSlide key={index + 'slide'}>
                {slide}
            </SwiperSlide>
        )
    }

    return(
        <div className={className} style={style} id={elementID}>
           <button className='prev-arrow' id={`prev-arrow-${elementID}`} onClick={e => swiper.slidePrev()}></button>
           <button className='next-arrow' id={`next-arrow-${elementID}`} onClick={e => swiper.slideNext()}></button>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={100}
                navigation = {{
                    nextEl: `#next-arrow-${elementID}`,
                    prevEl: `#prev-arrow-${elementID}`
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