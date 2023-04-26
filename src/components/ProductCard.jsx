export const ProductCard = ({showType, title, author, image, price, fakePrice, format, reader, pageCount, length, rate, countRates, style, className}) => {
    const normalStyle = {}
    const miniStyle = {}
    const squareStyle = {}
    const bigSquareStyle = {}

    const audioFormat = 
        <>
            <p className="product-reader">Читает {reader}</p>
            <p className="product-length">Длительность: {length}</p>
        </>

    const textFormat = <p className="product-page-count">Страниц: {pageCount}</p>

    return(
        <div className={`d-flex flex-column ${className}`} style={{style}}>
            <img 
                src={require('../assets/books/' + image)} 
                alt={'Book frontpage'}
                style={showType === 'normal' ? normalStyle :
                        showType === 'mini' ? miniStyle :
                        showType === 'square' ? squareStyle : 
                        bigSquareStyle}
            />
            <div className="d-flex flex-row">
                <p className="product-price">{price} руб.</p>
                <p className="product-fake-price">{fakePrice}</p>
            </div>
            <p className="product-title">{title}</p>
            <p className="product-author">{author}</p>
            {format === 'Текст' ?
                <p className="product-page-count">Страниц: {pageCount}</p> :
                <>
                    <p className="product-reader">Читает {reader}</p>
                    <p className="product-length">Длительность: {length}</p>
                </>
            }
            <div className="d-flex flex-row">
                <p className="product-format">{format}</p>
                <img src="" alt="" />
                <p className="product-rate">{rate}</p>
                <p className="product-rates-count">{countRates}</p>
            </div>
            <button className="btn btn-secondary">В корзину</button>
        </div>
    )
}