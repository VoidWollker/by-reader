import "../css/ProductCard.css"

export const ProductCard = ({showType, id, title, author, image, price, fakePrice, format, reader, pageCount, length, rate, ratesCount, style, className}) => {
    const normalStyle = {width: '100%'}
    const miniStyle = {width: '60%'}
    const squareStyle = {width: '100%', aspectRatio: 1}
    const bigSquareStyle = {width: '120%', aspectRatio: 1}

    return(
        <div className={`d-flex flex-column ${className}`} style={{style}}>
            <a href={`/product/?id=${id}`}>
                <img className="img-page-home"
                    src={require('../assets/books/' + image)} 
                    alt={'Book frontpage'}
                    re
                    style={showType === 'normal' ? normalStyle :
                            showType === 'mini' ? miniStyle :
                            showType === 'square' ? squareStyle : 
                            showType === 'bigSquare' ? bigSquareStyle :
                            {}
                        }
                /> 
            </a>
            <div className="d-flex flex-row align-items-center m-1 mx-0">
                <p className="product-price bordered-primary-text h4 rounded me-1 p-1"><b>{price} Р</b></p>
                <p className="product-fake-price mx-1 h4"><s>{fakePrice} Р</s></p>
            </div>
            <p className="product-title">{title}</p>
            <p className="product-author w-100">{author}</p>
            {format === 'Текст' ?
                <p className="product-page-count w-100">Страниц: {pageCount}</p> :
                <div className="m-1">
                    <p className="product-reader w-100">Читает {reader}</p>
                    <p className="product-length w-100">Длительность: {length}</p>
                </div>
            }
            <div className="d-flex flex-row align-items-center m-1 mx-0 product-format">
                <p className="bordered-primary-text rounded me-1 px-1">{format}</p>
                <img src={require('../assets/icons/product-star.png')} alt="" className="icon-rating mx-1"/>
                <p className="product-rate me-1"><b>{rate}</b></p>
                <p className="product-rates-count">{ratesCount}</p>
            </div>
            <button className="btn btn-tertiary btn-sm my-1 btn-to-cart w-100"><b>В корзину</b></button>
        </div>
    )
}