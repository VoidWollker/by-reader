import { ClientEmpty } from '../components/ClientEmpty'
import "../css/ProductQuotes.css"

export const ProductQuotes = ({elementID, quotes, quotesCount, increaseQuotesCount, increaseQuoteRate, decreaseQuoteRate}) =>{
    const createQuoteBlock = (quote, index) =>{
        const disableLikes = () =>{
            document.getElementById(`quote-${index}-like`).setAttribute('disabled', 'disabled')
            document.getElementById(`quote-${index}-like`).classList.add('btn-like-disabled')
            document.getElementById(`quote-${index}-dislike`).setAttribute('disabled', 'disabled')
            document.getElementById(`quote-${index}-dislike`).classList.add('btn-like-disabled')
        }

        const isDisabled = () =>
            document.getElementById(`quote-${index}-like`).getAttribute('disabled') === 'disabled' &&
            document.getElementById(`quote-${index}-dislike`).getAttribute('disabled') === 'disabled'
        

        return(
            <div className="w-75 mx-auto" id={`quote-${index}`}>
                <img src={require("../assets/icons/product-quotes.png")} alt="" className="icons-quotes"/>
                <div className="quotes">
                    <p className="py-2 px-3">{quote.text}</p>
                    <div className="d-flex flex-row ps-3 pb-1">
                        <button className="p-0 border-0 bg-white btn-like" id={`quote-${index}-like`} 
                            onClick={() => {
                                if (!isDisabled()){increaseQuoteRate(index)}
                                disableLikes()
                            }}>
                            <img src={require("../assets/icons/product-likes.png")} alt="" className="quote-like" />
                        </button>
                        
                        <div className="mt-1">
                            {quote.rate > 0 ?  
                                `+${quote.rate}` :
                                `${quote.rate}`
                            }
                        </div>
                        <button className="p-0 border-0 bg-white btn-like" id={`quote-${index}-dislike`}
                            onClick={() => {
                                if(!isDisabled()){decreaseQuoteRate(index)}
                                disableLikes()
                            }}>
                            <img src={require("../assets/icons/product-dislikes.png")} alt="" className="quote-dislike ms-1" />
                        </button>
                        
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            <div className="product-quotes mt-5 pb-4" id={elementID}>
                <div className="">
                    <h1 className="pt-4 w-75 mx-auto">Цитаты</h1>
                    {quotes.map((quote, index) =>
                        index <= quotesCount - 1 ?
                            createQuoteBlock(quote, index) :
                            ''
                        
                    )}
                    {quotes.length > quotesCount ?
                        <button className="btn btn-fivefold my-3 btn-quote" onClick={increaseQuotesCount}>Ещё 3 цитаты</button> :
                        ''
                    }
                    {/* <ClientEmpty
                        icon={require("../assets/icons/quotes.png")}
                        title={'Здесь будут отображаться цитаты'}
                        description={'Они скоро появятся на сайте!'}            
                    /> */}
                </div>
            </div>
        </>
    )
}