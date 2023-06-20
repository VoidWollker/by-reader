import "../css/ProductQuotes.css"

export const ProductQuotes = ({elementID, quotes}) =>{
    const createQuoteBlock = (quote, rate) =>{
        return(
            <div className="w-75 mx-auto" id={elementID}>
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
            </div>
        )
    }

    return(
        <>
            <div className="product-quotes mt-5 pb-4">
                <div className="">
                    <h1 className="pt-4 w-75 mx-auto">Цитаты</h1>
                    {quotes.map(quote =>{
                        return createQuoteBlock(quote.text, quote.rate)
                    })}
                    <button className="btn btn-fivefold my-3 btn-quote">Ещё 3 цитаты</button>
                </div>
            </div>
        </>
    )
}