import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ProductCard } from "../components/ProductCard"

export const SearchResult = () =>{
    const navigate = useNavigate()
    const [pathParams] = useSearchParams()
    const [findedProducts, setFindedProducts] = useState([])
    const [searchParams, setSearchParams] = useState({})

    useEffect(() =>{
        getProducts()
    }, [pathParams])

    const getProducts = async () =>{
        return await fetch('http://localhost:5000/book/find/by?' + new URLSearchParams(pathParamsToObject(pathParams.entries())))
            .then(res => res.json())
            .then(products =>{
                setFindedProducts(products)
            })     
    } 

    function pathParamsToObject(entries) {
        const result = {}
        for(const [key, value] of entries) {
          result[key] = value;
        }
        return result;
    } 

    return(
        <div className="d-flex flex-column">
            <p></p>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column">
                    <input type="text" placeholder='Название' value={searchParams.title}
                        onChange={e => setSearchParams({...searchParams, title: e.target.value})}/>
                    <input type="text" placeholder='Автор' value={searchParams.author}
                        onChange={e => setSearchParams({...searchParams, author: e.target.value})}/>
                    <input type="text" placeholder='Издательство' value={searchParams.publisher}
                        onChange={e => setSearchParams({...searchParams, publisher: e.target.value})} />
                    <input type="text" placeholder='Серия' value={searchParams.seria}
                        onChange={e => setSearchParams({...searchParams, seria: e.target.value})} />
                    <div className="d-flex flex-row">
                        <label htmlFor="all">Все</label>
                        <input type="radio" id="all" name="format" onClick={() => setSearchParams({...searchParams, format: ''})}/>
                    </div>
                    <div className="d-flex flex-row">
                        <label htmlFor="text">Текст</label>
                        <input type="radio" id="text" name="format" onClick={() => setSearchParams({...searchParams, format: 'Текст'})}/>
                    </div>
                    <div className="d-flex flex-row">
                        <label htmlFor="audio">Аудио</label> 
                        <input type="radio" id="audio" name="format" onClick={() => setSearchParams({...searchParams, format: 'Аудио'})}/>
                    </div>
                    <div className="d-flex flex-row">
                        <label htmlFor="podcast">Подкаст</label>
                        <input type="radio" id="podcast" name="format" onClick={() => setSearchParams({...searchParams, format: 'Подкаст'})}/>
                    </div>
                    <button className='btn btn-primary' onClick={() => {
                        let urlParams = Object.keys(searchParams)
                            .filter(param => searchParams[param] !== '')
                            .reduce((res, key) => (res[key] = searchParams[key], res), {})
                        navigate('?' + new URLSearchParams(urlParams))
                    }}>Поиск</button>
                </div>
                <div className="d-flex flex-column">
                    {findedProducts.map(product =>
                        <ProductCard 
                            showType={'normal'}
                            id={product._id}
                            title={product.title}
                            author={product.author}
                            image={'Дизайн 10.png'}
                            price={product.price}
                            fakePrice={product.fakePrice}
                            format={product.format}
                            pageCount={product.pageCount}
                            rate={product.rate}
                            ratesCount={product.ratesCount}
                    />)}
                </div>
            </div>
        </div>
    )
}