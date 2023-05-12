import "../css/ProductQuotes.css"

export const ProductQuotes = ({quotes}) =>{
    const createQuoteBlock = (quote, rate) =>{
        return(
            <>
                <img src={require("../assets/icons/product-quotes.png")} alt="" className="icons-quotes"/>
                <div className="quotes">
                    <p className="py-2 px-3">{quote}</p>
                    <div className="d-flex flex-row ps-3 pb-1">
                        <img src={require("../assets/icons/product-likes.png")} alt="" className="quote-like" />
                        <div className="mt-1">
                        {rate > 0 ?  `+${rate}` :
                        rate < 0 ? `-${rate}`:
                        `${rate}`}
                        </div>
                        <img src={require("../assets/icons/product-dislikes.png")} alt="" className="quote-dislike ms-1" />
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <div className="product-quotes mt-5">
                <h1 className="pt-4">Цитаты</h1>
                {quotes.map(quote =>{
                    return createQuoteBlock(quote, 54)
                })}
                <button className="btn btn-tertiary my-3">Ещё 3 цитаты</button>
            </div>
        </>
    )
}