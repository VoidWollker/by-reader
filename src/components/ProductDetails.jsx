import "../css/ProductDetails.css"

export const ProductDetials = ({title, format, author, recomendedAge, publisher, seria, rate, ratesCount, reviewCount}) =>{
    return(
        <div className="d-flex flex-row">
            <div className="d-flex flex-column">
                <img src={require("../assets/books/Дизайн 10.png")} alt="" />
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row mb-3">
                    <p className="product-title"><b>{title}</b></p>
                    <div className="produсе-feature ">
                        <p className="product-format">{format}</p>
                    </div>
                    <div className="produсе-feature mx-2">
                        <p className="product-recomended-age">{recomendedAge}+</p>
                    </div>
                </div>
                <div className="d-flex flex-column data-book">
                    <p>Автор: {author}</p>
                    <p>Издательство: {publisher}</p>
                    {seria !== null ?
                        <div className="d-flex flex-row">
                            <p>Серия: {seria}</p>
                        </div> :
                        ''
                    }
                </div>
                <div className="d-flex flex-row">
                    <div className="d-flex-flex-column">
                        <div className="d-flex flex-row">
                            <img src="" alt="" />
                            <p>{rate}</p>
                        </div>
                        <p>{ratesCount}</p>
                    </div>
                    <div className="d-flex-flex-column">
                        <div className="d-flex flex-row">
                            <img src="" alt="" />
                            <p>{reviewCount}</p>
                        </div>
                        <p>Отзывы</p>
                    </div>
                </div>
            </div>
        </div>
    )
}