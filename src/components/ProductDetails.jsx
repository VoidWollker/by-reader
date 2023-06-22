import "../css/ProductDetails.css"

export const ProductDetials = ({elementID, product}) =>{
    return(
        <div className="d-flex flex-row flex-wrap productDetails w-75 mx-auto" id={elementID}>
            <div className="d-flex flex-column mt-5 me-5">
                <img src={require(`../assets/books/${product.cover}`)} alt="" className="foto-book"/>
            </div>
            <div className="d-flex flex-column  mt-5">
                <div className="d-flex flex-row mb-1">
                    <p className="product-titles me-2"><b>{product.title}</b></p>
                    <div className="produсе-feature px-2">
                        <p className="product-format">{product.format}</p>
                    </div>
                    <div className="produсе-feature mx-2 px-2">
                        <p className="product-recomended-age">{product.recomendedAge}+</p>
                    </div>
                </div>
                <div className="d-flex flex-column data-book mb-2">
                    <p className="mb-1">Автор: {product.author}</p>
                    <p className="mb-1">Издательство: {product.publisher}</p>
                    {product.seria !== undefined ?
                        <div className="d-flex flex-row">
                            <p>Серия: {product.seria}</p>
                        </div> :
                        ''
                    }
                </div>
                <div className="d-flex flex-row mb-2">
                    <div className="d-flex-flex-column product-rating me-2">
                        <div className="d-flex flex-row ">
                            <img src={require("../assets/icons/product-star.png")}  alt="Рейтинг" className="icon-product"/>
                            <p className="product-rate"><b>{product.rate}</b></p>
                        </div>
                        <p className="product-rate-exactly">{product.ratesCount}</p>
                    </div>
                    <div className="d-flex-flex-column ms-2">
                        <div className="d-flex flex-row">
                            <img src={require("../assets/icons/product-comments.png")} alt="Отзывы" className="icon-product"/>
                            <p className="product-review"><b>{product.reviewCount}</b></p>
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
                    <p className="product-price bordered-primary-text h4 rounded me-1 p-1 "><b>{product.price} Р</b></p>
                    <p className="product-fake-price mx-1 h4 my-2"><s>{product.fakePrice} Р</s></p>
                </div>
                <button className="btn btn-tertiary py-2 mb-2 btn-buy"><b>КУПИТЬ</b></button>
                <div className="d-flex flex-column">
                    <p className="det-info mb-2"><b>Подробная информация</b></p>
                    <p className="detailed-information mb-1">Объем: {product.pageCount}стр.</p>
                    <p className="detailed-information mb-1">Жанр: {product.genre}</p>
                    <p className="detailed-information mb-1">Ограничения по возрасту: {product.recomendedAge}+</p>
                    <p className="detailed-information">Дата написания: {product.dateWriting}</p>
                </div>
            </div>
        </div>
    )
}