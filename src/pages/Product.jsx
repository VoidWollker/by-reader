import { useState, useEffect } from 'react'
import { ProductDetials } from "../components/ProductDetails"
import { ProductDescription } from "../components/ProductDescription"
import { ProductQuotes } from "../components/ProductQuotes"
import { ProductReviews }from "../components/ProductReviews"

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
            <ProductDetials 
                title={book.title}
                format={'Текст'}
                author={'Джордж Оруэл'}
                recomendedAge={18}
                publisher={'АСТ'}
                rate={4.8}
                ratesCount={466}
                reviewCount={45}
                price={460}
                fakePrice={660}
                volume={280}
                genre={'Современные детективы'}
                dateWriting={2022}
            />
            <ProductDescription description={'Best Book'}/>
            <ProductQuotes quotes={['Война — это мир, свобода — это рабство, незнание — сила.', `— Сколько я показываю пальцев, Уинстон?
— Четыре.
— А если партия говорит, что их не четыре, а пять, — тогда сколько?..`]}/>
            <ProductReviews reviews={['BEEEEST', 'It sad, but that is real']}/>
        </>
    )
}