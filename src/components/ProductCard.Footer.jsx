export const Footer = ({format, rate, countRates}) =>{
    return(
        <>
            <div>
                <p className="product-format">{format}</p>
                {/* <img src="" alt="" /> */}
                <p className="product-rate">{rate}</p>
                <p className="product-count-rates">{countRates}</p>
            </div>
            <button>В корзину</button>
        </>
    )
}