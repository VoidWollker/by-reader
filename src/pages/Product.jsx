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
    const [pathParams] = useSearchParams()

    useEffect(() =>{
        getBook(pathParams.get('id'))
    }, [pathParams])

    const getBook = async (id) =>
        await fetch(`http://localhost:5000/book/${id}`)
            .then(res => res.json())
            .then(res => {
                setBook(res)
                changeUserData({viewed: [...new Set([...user.viewed, {_id:id}].map(item => item._id))].map(item => item = {'_id': item})})
            })
        
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
            <ProductDescription description={'Best Book'} elementID={'product-description'} />
            <ProductQuotes quotes={['Война — это мир, свобода — это рабство, незнание — сила.', `— Сколько я показываю пальцев, Уинстон?
— Четыре.
— А если партия говорит, что их не четыре, а пять, — тогда сколько?..`]} elementID={'product-quotes'}/>
            <ProductReviews reviews={['BEEEEST', 'It sad, but that is real']} elementID={'product-reviews'}/>
            </div>
        </>
    )
}