import { useState, useEffect } from 'react'
import { ProductDetials } from "../components/ProductDetails"
import { ProductDescription } from "../components/ProductDescription"
import { ProductQuotes } from "../components/ProductQuotes"
import { ProductReviews }from "../components/ProductReviews"
import "../css/Product.css"

export const Product = () =>{
    const [book, setBook] = useState({})

    useEffect(() =>{
        getBook()
    })

    const getBook = async () =>{
        await fetch('http://localhost:5000/book/645774394671b0aa9042918d')
        .then(res => res.json())
        .then(res => setBook(res))
    }

    return(
        <>
        <div className='pb-4'>
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
            <ul className="nav nav-tabs my-4">
                <li className="nav-item mx-2 product-detials">
                    <a className="link-active" href="#">Краткое описание</a>
                </li>
                <li className="nav-item mx-2 product-detials">
                    <a className="link-active" href="#">Известные цитаты</a>
                </li>
                <li className="nav-item mx-2 product-detials">
                    <a className="link-active" href="#">Отзывы</a>
                </li>
            </ul>
            <ProductDescription description={'Best Book'}/>
            <ProductQuotes quotes={['Война — это мир, свобода — это рабство, незнание — сила.', `— Сколько я показываю пальцев, Уинстон?
— Четыре.
— А если партия говорит, что их не четыре, а пять, — тогда сколько?..`]}/>
            <ProductReviews reviews={['BEEEEST', 'It sad, but that is real']}/>
            </div>
        </>
    )
}