export default function Carousel(slides){

    createSlide = (slide, index) => {
        if (index == 0){
            return(
                <div className="carousel-item active">
                    <img src={slide} alt={index + " slide"} />
                </div>
            )
        }
        else{
            <div className="carousel-item">
                <img src={slide} alt={index + " slide"} />
            </div>
        }
    }

    return(
        <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {slides.map((slide, index) =>{
                    return(
                        createSlide(slide, index)
                    )
                })}
            </div>
        </div>
    )
}