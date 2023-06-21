import { useState, useEffect } from 'react'
import { ProductDetials } from "../components/ProductDetails"
import { ProductDescription } from "../components/ProductDescription"
import { ProductQuotes } from "../components/ProductQuotes"
import { ProductReviews }from "../components/ProductReviews"
import "../css/Product.css"
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/UserContext'

export const Product = () =>{
    const {user, changeUserData} = useAuth()
    const [book, setBook] = useState({})
    const [reviews, setReviews] = useState([])
    const [quotesCount, setQuotesCount] = useState(3)
    const [pathParams] = useSearchParams()

    useEffect(() =>{
        getBook(pathParams.get('id'))
        setReviews([])
    }, [pathParams])

    useEffect(() =>{
        getReviews()
    }, [book])

    const getBook = async (id) =>
        await fetch(`http://localhost:5000/book/${id}`)
            .then(res => res.json())
            .then(res => {
                setBook(res)
                changeUserData({viewed: [...new Set([...user.viewed, {_id:id}].map(item => item._id))].map(item => item = {'_id': item})})
            })

    const increaseQuotesCount = () => setQuotesCount(quotesCount => quotesCount + 3)

    const increaseQuoteRate = (targetIndex) => setBook(book => {return {...book, quotes: book.quotes.map(
        (quote, index) => index === targetIndex ? {...quote, rate: quote.rate+1} : quote)}})

    const decreaseQuoteRate = (targetIndex) => setBook(book => {return {...book, quotes: book.quotes.map(
        (quote, index) => index === targetIndex ? {...quote, rate: quote.rate-1} : quote)}})

    const getReviews = () =>{
        setReviews([])
        try{
            book.reviews.map(async review =>{
                await fetch(`http://localhost:5000/user/getByID/${review.user}`) 
                    .then(userData => userData.json())
                    .then(userData => {
                        setReviews(reviews => [...reviews, {username: userData.username, text: review.text, writeDate: '11.11.2011'}])})
            })
        } catch (err){console.log(err);}
    }

    const writeReview = async (reviewText) =>{
        await fetch(`http://localhost:5000/book/update`,{
            method: 'POST',
            body: JSON.stringify({
                _id: book._id,
                reviews: [
                    ...book.reviews,
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
            .then(bookData => setBook(bookData))
    }
    
    return(
        <>
        <div className='pb-4 '>
            <ProductDetials 
                title={book.title}
                format={book.format}
                author={book.author}
                recomendedAge={book.recomendedAge}
                publisher={book.publisher}
                rate={book.rate}
                ratesCount={book.ratesCount}
                reviewCount={book.reviewCount}
                price={book.price}
                fakePrice={book.fakePrice}
                pageCount={book.pageCount}
                genre={book.genre}
                dateWriting={book.dateWriting}
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
            <ProductDescription description={book.description} elementID={'product-description'} />
            <div id="product-quotes">
                {book.quotes !== undefined ? 
                    <ProductQuotes quotes={book.quotes} 
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
                    <ProductReviews reviews={reviews} bookID={book._id} writeReview={writeReview}/> :
                    ''
                }
            </div>
            
            </div>
        </>
    )
}