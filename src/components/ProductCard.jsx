export const ProductCard = ({title, price, image}) =>{
    return(
        <div className="product-container"
            style={{backgroundImage: `url(require(${image}))`}}
        >
            <p className="product-title">{title}</p>
            <p className="product-price">{price}</p>
        </div>
    )
}
