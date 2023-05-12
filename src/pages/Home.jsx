import { useState, useEffect } from "react"
import { MainSlider } from "../components/MainSlider"
import { ProductSlider } from "../components/ProductSlider"
import { ProductCard } from "../components/ProductCard"
import "../css/Home.css"

export const Home = () =>{
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks()
    })

    const getBooks = async () =>{
        await fetch('http://localhost:5000/book/all')
            .then(res => res.json())
            .then(res => setBooks(res))
    }

    return(
        <div className="d-flex flex-column">
            <MainSlider 
                slides={["main-slider slide-1.png", "main-slider slide-2.png"]}
                style={{
                    'maxHeight': 80 + 'vh'
                }}
            />
            <div className="d-flex flex-column w-75" style={{marginLeft: '12.5vw', marginRight: '12.5vw'}}>
                <h2 className="my-4">Популярное</h2>
                <ProductSlider 
                    slidesPerView={5}
                    slides={books.map(book =>{
                        return <ProductCard 
                            showType={'normal'}
                            title={book.title}
                            author={book.author}
                            image={'Дизайн 10.png'}
                            price={book.price}
                            fakePrice={book.fakePrice}
                            format={book.format}
                            pageCount={book.pageCount}
                            rate={4.8}
                            countRates={640}
                        ></ProductCard>
                    })}
                />
                <h2 className="my-4">Новинки</h2>
                <ProductSlider 
                    slidesPerView={5}
                    slides={[1,2,3,4,5,6,7,8].map(i =>{
                        return <ProductCard 
                            showType={'mini'}
                            title={'1984'}
                            author={'Джордж Оруэл'}
                            image={'Дизайн 10.png'}
                            price={810}
                            fakePrice={920}
                            format={'Текст'}
                            pageCount={170}
                            rate={4.8}
                            countRates={640}
                        ></ProductCard>
                    })}
                />
                <h2 className="my-4">Аудиокниги</h2>
                <ProductSlider 
                    slidesPerView={5}
                    slides={[1,2,3,4,5,6,7,8].map(i =>{
                        return <ProductCard 
                            showType={'square'}
                            title={'1984'}
                            author={'Джордж Оруэл'}
                            image={'Дизайн 10.png'}
                            price={810}
                            fakePrice={920}
                            format={'Текст'}
                            pageCount={170}
                            rate={4.8}
                            countRates={640}
                        ></ProductCard>
                    })}
                />
                <h2 className="my-4">Подкасты</h2>
                <ProductSlider 
                    slidesPerView={4}
                    slides={[1,2,3,4,5,6,7,8].map(i =>{
                        return <ProductCard 
                            showType={'bigSquare'}
                            title={'1984'}
                            author={'Джордж Оруэл'}
                            image={'Дизайн 10.png'}
                            price={810}
                            fakePrice={920}
                            format={'Текст'}
                            pageCount={170}
                            rate={4.8}
                            countRates={640}
                        ></ProductCard>
                    })}
                />
            </div>
        </div>
    )
}