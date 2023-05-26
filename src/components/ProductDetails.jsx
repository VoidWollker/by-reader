import "../css/ProductDetails.css"

export const ProductDetials = ({elementID, title, format, author, recomendedAge, publisher, seria, rate, ratesCount, reviewCount, price,fakePrice, pageCount, genre, dateWriting}) =>{
    return(
        <div className="d-flex flex-row flex-wrap productDetails w-75 mx-auto" id={elementID}>
            <div className="d-flex flex-column mt-5 me-5">
                <img src={require("../assets/books/Дизайн 10.png")} alt="" className="foto-book"/>
            </div>
            <div className="d-flex flex-column  mt-5">
                <div className="d-flex flex-row mb-1">
                    <p className="product-title me-2"><b>{title}</b></p>
                    <div className="produсе-feature px-2">
                        <p className="product-format">{format}</p>
                    </div>
                    <div className="produсе-feature mx-2 px-2">
                        <p className="product-recomended-age">{recomendedAge}+</p>
                    </div>
                </div>
                <div className="d-flex flex-column data-book mb-2">
                    <p className="mb-1">Автор: {author}</p>
                    <p className="mb-1">Издательство: {publisher}</p>
                    {seria !== null ?
                        <div className="d-flex flex-row">
                            <p>Серия: {seria}</p>
                        </div> :
                        ''
                    }
                </div>
                <div className="d-flex flex-row mb-2">
                    <div className="d-flex-flex-column product-rating me-2">
                        <div className="d-flex flex-row ">
                            <img src={require("../assets/icons/product-star.png")}  alt="Рейтинг" className="icon-product"/>
                            <p className="product-rate"><b>{rate}</b></p>
                        </div>
                        <p className="product-rate-exactly">{ratesCount}</p>
                    </div>
                    <div className="d-flex-flex-column ms-2">
                        <div className="d-flex flex-row">
                            <img src={require("../assets/icons/product-comments.png")} alt="Отзывы" className="icon-product"/>
                            <p className="product-review"><b>{reviewCount}</b></p>
                        </div>
                        <p className="product-review-exactly">Отзывы</p>
                    </div>
                </div>
                <div className="d-flex flex-row mb-2">
                    <button className="btn btn-quaternary  d-flex flex-row  me-2">
                        <img src={require("../assets/icons/product-fragment.png")} alt="" className="my-1 me-1"  />
                        <p className="product-fragment">Читать отрывок</p>
                    </button>
                    <button className="btn btn-quaternary btn-square me-2">
                        <img src={require("../assets/icons/product-like.png")} alt="" className="m-1"/>
                    </button>
                    <button className="btn btn-quaternary btn-square">
                        <img src={require("../assets/icons/product-basket.png")} alt="" />
                    </button>
                </div>
                <div className="d-flex flex-row mb-2">
                    <p className="product-price bordered-primary-text h4 rounded me-1 p-1 "><b>{price} Р</b></p>
                    <p className="product-fake-price mx-1 h4 my-2"><s>{fakePrice} Р</s></p>
                </div>
                <button className="btn btn-tertiary py-2 mb-2 btn-buy"><b>КУПИТЬ</b></button>
                <div className="d-flex flex-column">
                    <p className="det-info mb-2"><b>Подробная информация</b></p>
                    <p className="detailed-information mb-1">Объем: {pageCount}стр.</p>
                    <p className="detailed-information mb-1">Жанр: {genre}</p>
                    <p className="detailed-information mb-1">Ограничения по возрасту: {recomendedAge}+</p>
                    <p className="detailed-information">Дата написания: {dateWriting}</p>
                </div>
            </div>
        </div>
    )
}