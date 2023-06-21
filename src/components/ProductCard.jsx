import "../css/ProductCard.css"

export const ProductCard = ({showType, book, style, className}) => {
    const normalStyle = {width: '65%'}
    const miniStyle = {width: '50%'}
    const squareStyle = {width: '100%', aspectRatio: 1}
    const bigSquareStyle = {width: '110%', aspectRatio: 1}

    return(
        <div className={`d-flex flex-column ProductCard ${className}`} style={{style}}>
            <a href={`/product/?id=${book._id}`}>
                <img className="img-page-home"
                    src={require('../assets/books/' + book.cover)} 
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
                <p className="product-price bordered-primary-text h4 rounded me-1 p-1"><b>{book.price} Р</b></p>
                <p className="product-fake-price mx-1 h4"><s>{book.fakePrice} Р</s></p>
            </div>
            <p className="product-title">{book.title}</p>
            <p className="product-author w-100">{book.author}</p>
            {book.format === 'Текст' ?
                <p className="product-page-count w-100">Страниц: {book.pageCount}</p> :
                <div className="m-1 ms-0">
                    <p className="product-reader w-100 ">Читает: {book.reader}</p>
                    <p className="product-length w-100">Длительность: {book.length}</p>
                </div>
            }
            <div className="d-flex flex-row align-items-center m-1 mx-0 product-format">
                <p className="bordered-primary-text rounded me-1 px-1">{book.format}</p>
                <img src={require('../assets/icons/product-star.png')} alt="" className="icon-rating mx-1"/>
                <p className="product-rate "><b>{book.rate}</b></p>
                <p className="product-rates-count">{book.ratesCount}</p>
            </div>
            <button className="btn btn-tertiary btn-sm my-1 btn-to-cart w-100"><b>В корзину</b></button>
        </div>
    )
}