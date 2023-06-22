import { useState, useEffect } from 'react'
import { ProductDetials } from "../components/ProductDetails"
import { ProductDescription } from "../components/ProductDescription"
import { ProductQuotes } from "../components/ProductQuotes"
import { ProductReviews }from "../components/ProductReviews"
import "../css/Product.css"
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/UserContext'
import { Loading } from '../components/Loading'

export const Product = () =>{
    const {user, changeUserData} = useAuth()
    const [book, setBook] = useState(null)
    const [quotes, setQuotes] = useState([])
    const [quotesCount, setQuotesCount] = useState(3)
    const [reviews, setReviews] = useState([])
    const [reviewsCount, setReviewsCount] = useState(3)
    const [pathParams] = useSearchParams()

    useEffect(() =>{
        getBook(pathParams.get('id'))
    }, [pathParams])

    useEffect(() =>{
        if (book !== null){
            setReviews([])
            getReviews()
            setQuotes(book.quotes)
        }
    }, [book])

    const getBook = async (id) =>
        await fetch(`http://localhost:5000/book/${id}`)
            .then(res => res.json())
            .then(res => {
                setBook(res)
                if (user){
                    changeUserData({viewed: [...new Set([...user.viewed, {_id:id}].map(item => item._id))]
                        .map(item => item = {'_id': item})}) 
                }
                
            })

    const increaseQuotesCount = () => setQuotesCount(quotesCount => quotesCount + 3)

    const increaseQuoteRate = async (targetIndex) => {
        await fetch(`http://localhost:5000/book/update`,{
            method: 'POST',
            body: JSON.stringify({
                _id: book._id,
                quotes: quotes.map((quote, index) => index === targetIndex ? {...quote, rate: quote.rate + 1} : quote)
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(bookData => setQuotes(bookData.quotes))
    }

    const decreaseQuoteRate = async (targetIndex) => {
        await fetch(`http://localhost:5000/book/update`,{
            method: 'POST',
            body: JSON.stringify({
                _id: book._id,
                quotes: quotes.map((quote, index) => index === targetIndex ? {...quote, rate: quote.rate - 1} : quote)
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(bookData => setQuotes(bookData.quotes))
    }

    const getReviews = () =>{
        try{
            book.reviews.map(async review =>{
                await fetch(`http://localhost:5000/user/getByID/${review.user}`) 
                    .then(userData => userData.json())
                    .then(userData => {
                        setReviews(reviews => [{...review, username: userData.username}, ...reviews])})
            })
        } catch (err){console.log(err);}
    }

    const increaseReviewsCount = () => setReviewsCount(reviewsCount => reviewsCount + 5)

    const writeReview = async (reviewText) =>{
        await fetch(`http://localhost:5000/book/update`,{
            method: 'POST',
            body: JSON.stringify({
                _id: book._id,
                reviews: [
                    ...reviews,
                    {
                        user: user._id,
                        text: reviewText
                    }
                ]
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(bookData => setReviews(reviews => [{...bookData.reviews.slice(-1)[0], username: user.username}, ...reviews]))
    }
    
    return(
        <>
            {book !== null ?
                <div className='pb-4 '>
                    <ProductDetials 
                        product={book}
                    />
                    <ul className="nav nav-tabs my-4 w-75 mx-auto">
                        <li className="nav-item mx-2 product-detials">
                            <a className="link-active" href="#product-description">Краткое описание</a>
                        </li>
                        <li className="nav-item mx-2 product-detials">
                            <a className="link-active" href="#product-quotes">Известные цитаты</a>
                        </li>
                        <li className="nav-item mx-2 product-detials">
                            <a className="link-active" href="#product-reviews">Отзывы</a>
                        </li>
                    </ul>
                    {book.description !== undefined ? 
                        <ProductDescription description={book.description} elementID={'product-description'} /> :
                        ''
                    }
                    
                    <div id="product-quotes">
                        {book.quotes !== undefined ? 
                            <ProductQuotes 
                                quotes={quotes} 
                                quotesCount={quotesCount} 
                                increaseQuotesCount={increaseQuotesCount}
                                increaseQuoteRate={increaseQuoteRate}
                                decreaseQuoteRate={decreaseQuoteRate}
                            /> :
                            ''
                        }
                    </div>
                    <div id="product-reviews">
                        {book.reviews !== undefined ?
                            <ProductReviews 
                                currentUserName={user?.username ?? undefined}
                                reviews={reviews} 
                                reviewsCount={reviewsCount}
                                increaseReviewsCount={increaseReviewsCount}
                                writeReview={writeReview}
                            /> :
                            ''
                        }
                    </div>
                    
                </div> :
                <div className='py-5 loading'>                
                    <Loading/>
                </div>
            }
        </>
    )
}