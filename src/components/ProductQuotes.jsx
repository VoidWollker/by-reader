export const ProductQuotes = ({quotes}) =>{
    const createQuoteBlock = (quote, rate) =>{
        return(
            <>
                <img src="" alt="" />
                <p>{quote}</p>
                <div className="d-flex flex-row">
                    <img src="" alt="" className="quote-like" />
                    {rate > 0 ?
                        +{rate} :
                        rate < 0 ?
                            -{rate}:
                            {rate}}
                    <img src="" alt="" className="quote-dislike" />
                </div>
            </>
        )
    }

    return(
        <>
            <h1>Цитаты</h1>
            {quotes.map(quote =>{
                return createQuoteBlock('Yeeh', 54)
            })}
            <button>Ещё 3 цитаты</button>
        </>
    )
}