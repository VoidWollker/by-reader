export const ProductCard = ({title, author, image, price, fakePrice, format, pageCount, length, rate, countRates, style, className}) => {
    return(
        <div className="d-flex flex-column">
            <img src={require('../assets/books/' + image)} alt={'Book frontpage'}/>
            <div className="d-flex flex-row">
                <p className="product-price">{price}</p>
                <p className="product-fake-price">{fakePrice}</p>
            </div>
            <p className="product-title">{title}</p>
        </div>
    )
}