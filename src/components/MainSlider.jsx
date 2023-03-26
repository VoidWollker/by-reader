import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css";

export const  MainSlider = ({slides}) => {

    const createSlide = (slide, index) => {
        return(
            <SwiperSlide key={index + 'slide'}>
                <img 
                    src={require('../assets/img/'+slide)} 
                    alt={index + " slide"}
                    style = {{
                        'min-width': 100 + '%',
                        'max-width': 100 + '%',
                    }}
                />
            </SwiperSlide>
        )
    }

    return(
        <div>
            <Swiper
                centeredSlides={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
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