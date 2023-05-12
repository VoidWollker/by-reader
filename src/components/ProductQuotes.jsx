import "../css/ProductQuotes.css"

export const ProductQuotes = ({quotes}) =>{
    const createQuoteBlock = (quote, rate) =>{
        return(
            <>
                <img src="" alt="" />
                <div className="quotes">
                    <p>{quote}</p>
                    <div className="d-flex flex-row">
                        <img src="" alt="" className="quote-like" />
                        {rate > 0 ?  `+${rate}` :
                        rate < 0 ? `-${rate}`:
                        `${rate}`}
                        <img src="" alt="" className="quote-dislike" />
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
                <button>Ещё 3 цитаты</button>
            </div>
        </>
    )
}