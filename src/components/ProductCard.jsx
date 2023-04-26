import "../css/ProductCard.css"

export const ProductCard = ({showType, title, author, image, price, fakePrice, format, reader, pageCount, length, rate, countRates, style, className}) => {
    const normalStyle = {}
    const miniStyle = {width: '60%'}
    const squareStyle = {width: '100%', aspectRatio: 1}
    const bigSquareStyle = {width: '150%', aspectRatio: 1}

    return(
        <div className={`d-flex flex-column ${className}`} style={{style}}>
            <img 
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
            <div className="d-flex flex-row align-items-center m-1">
                <p className="product-price bordered-primary-text h4 rounded me-1 p-1"><b>{price} Р</b></p>
                <p className="product-fake-price h4"><s>{fakePrice} Р</s></p>
            </div>
            <p className="product-title m-1">{title}</p>
            <p className="product-author m-1">{author}</p>
            {format === 'Текст' ?
                <p className="product-page-count m-1">Страниц: {pageCount}</p> :
                <div className="m-1">
                    <p className="product-reader">Читает {reader}</p>
                    <p className="product-length">Длительность: {length}</p>
                </div>
            }
            <div className="d-flex flex-row align-items-center m-1">
                <p className="product-format bordered-primary-text rounded me-1 px-1">{format}</p>
                <img src={require('../assets/icons/product-star.png')} alt="" />
                <p className="product-rate me-1"><b>{rate}</b></p>
                <p className="product-rates-count">{countRates}</p>
            </div>
            <button className="btn btn-tertiary btn-sm w-50 m-1"><b>В корзину</b></button>
        </div>
    )
}