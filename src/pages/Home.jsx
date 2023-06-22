import { useState, useEffect } from "react"
import { MainSlider } from "../components/MainSlider"
import { ProductSlider } from "../components/ProductSlider"
import { ProductCard } from "../components/ProductCard"
import { Subscriptions } from "../components/Subscriptions"
import "../css/Home.css"
import { Loading } from "../components/Loading"

export const Home = () =>{
    const [books, setBooks] = useState(null)

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = async () =>{
        await fetch('http://localhost:5000/book/all')
            .then(res => res.json())
            .then(res => setBooks(res))
    }

    return(
        <div className="d-flex flex-column pb-5">
            <MainSlider 
                slides={["main-slider slide-1.png", "main-slider slide-2.png","main-slider slide-3.png","main-slider slide-4.png"]}
                style={{
                    'maxHeight': 80 + 'vh'
                }}
            />
            {books !== null ?
                <div className="d-flex flex-column w-75" style={{marginLeft: '12.5vw', marginRight: '12.5vw'}}>
                    <h2 className="my-4">Новинки</h2>
                    <ProductSlider 
                        elementID={'newest'}
                        slidesPerView={5}
                        slides={books.sort((a,b) => a.createdAt - b.createdAt).map(book =>{
                            return <ProductCard 
                                showType={'normal'}
                                book={book}
                            ></ProductCard>
                        })}
                    />
                    <h2 className="my-4">Аудиокниги</h2>
                    <ProductSlider 
                        elementID={'audio'}
                        slidesPerView={5}
                        slides={books.filter(book => book.format === 'Аудио').map(book =>{
                            return <ProductCard 
                                showType={'square'}
                                book={book}
                            ></ProductCard>
                        })}
                    />
                    <h2 className="my-4">Подкасты</h2>
                    <ProductSlider 
                        elementID={'podcasts'}
                        slidesPerView={4}
                        slides={books.filter(book => book.format === 'Подкаст').map(book =>{
                            return <ProductCard 
                                showType={'bigSquare'}
                                book={book}
                            ></ProductCard>
                        })}
                    />
                    <h2 className="my-4">Жанры</h2>
                    <div className="d-flex flex-row home-genre flex-wrap justify-content-center" >
                        {['Роман', 'Боевики', 'Фэнтези', 'Фантастика', 'Детективы', 'Приключения'].map(genreName =>
                            <a href={`http://localhost:3000/search?genre=${genreName}`}>
                                <img src={require(`../assets/genre/${genreName}.png`)} alt={genreName} className="mx-2"/>
                                <p className="h3 p-genre mt-2">{genreName}</p>
                            </a>
                        )}
                    </div>
                    <h2 className="my-4">Подписки от Почитателя</h2>
                    <Subscriptions/>
                </div> :
                <div className='py-5 loading'>                
                    <Loading/>
                </div>
            }
        </div>
    )
}