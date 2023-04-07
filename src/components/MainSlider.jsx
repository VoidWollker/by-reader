import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation";

export const  MainSlider = ({slides, style, className}) => {

    const createSlide = (slide, index) => {
        return(
            <SwiperSlide key={index + 'slide'}>
                <img 
                    src={require('../assets/img/'+slide)} 
                    alt={index + " slide"}
                    style = {{
                        'minWidth': 100 + '%',
                        'maxWidth': 100 + '%',
                    }}
                    loading='lazy'
                />
            </SwiperSlide>
        )
    }

    return(
        <div className={className}>
            <Swiper
                loop = {true}
                style={style}
                centeredSlides={true}
                navigation = {true}
                pagination = {{
                    clickable: true
                }}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]}
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