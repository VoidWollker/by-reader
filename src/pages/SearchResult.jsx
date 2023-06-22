import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ProductCard } from "../components/ProductCard"

import "../css/SearchResult.css"
import { Loading } from '../components/Loading'

export const SearchResult = () =>{
    const navigate = useNavigate()
    const [pathParams] = useSearchParams()
    const [findedProducts, setFindedProducts] = useState(null)
    const [searchParams, setSearchParams] = useState({})

    useEffect(() =>{
        setSearchParams(pathParamsToObject(pathParams.entries()))
        getProducts()
    }, [pathParams])

    const getProducts = async () =>{
        if (pathParamsToObject(pathParams.entries()).data !== undefined){
            return await fetch('http://localhost:5000/book/find/byall?' + new URLSearchParams(pathParamsToObject(pathParams.entries())))
            .then(res => res.json())
            .then(products =>{
                setFindedProducts(products)
            }) 
        } else{
            return await fetch('http://localhost:5000/book/find/by?' + new URLSearchParams(pathParamsToObject(pathParams.entries())))
            .then(res => res.json())
            .then(products =>{
                setFindedProducts(products)
            })    
        }
         
    } 

    function pathParamsToObject(entries) {
        const result = {}
        for(const [key, value] of entries) {
          result[key] = value;
        }
        return result;
    } 

    return(
        <div className="d-flex flex-column pt-4 w-75 mx-auto">
            <p className='pb-4 h2'>Результат поиска</p>
            <div className="d-flex flex-row ">
                <div className="d-flex flex-column me-5 label-format">
                    <input className='my-1 ps-2 border-0 rounded input-SearchResult' type="text" placeholder='Название' value={searchParams.title}
                        onChange={e => setSearchParams({...searchParams, title: e.target.value})}/>
                    <input className='my-1 ps-2 border-0 rounded input-SearchResult' type="text" placeholder='Автор' value={searchParams.author}
                        onChange={e => setSearchParams({...searchParams, author: e.target.value})}/>
                    <input className='my-1 ps-2 border-0 rounded input-SearchResult' type="text" placeholder='Издательство' value={searchParams.publisher}
                        onChange={e => setSearchParams({...searchParams, publisher: e.target.value})} />
                    <input className='my-1 ps-2 border-0 rounded input-SearchResult' type="text" placeholder='Серия' value={searchParams.seria}
                        onChange={e => setSearchParams({...searchParams, seria: e.target.value})} />
                    <div className="d-flex flex-row form_radio">
                        <label htmlFor="all">Все</label>
                        <input checked={searchParams.format === undefined || searchParams.format === '' ? 'checked' : ''} type="radio" id="all" name="format" 
                            onChange={() => setSearchParams({...searchParams, format: ''})}/>
                    </div>
                    <div className="d-flex flex-row form_radio">
                        <label htmlFor="text">Текст</label>
                        <input checked={searchParams.format === 'Текст' ? 'checked' : ''} type="radio" id="text" name="format" 
                            onChange={() => setSearchParams({...searchParams, format: 'Текст'})}/>
                    </div>
                    <div className="d-flex flex-row form_radio">
                        <label htmlFor="audio">Аудио</label> 
                        <input checked={searchParams.format === 'Аудио' ? 'checked' : ''} type="radio" id="audio" name="format" 
                            onChange={() => setSearchParams({...searchParams, format: 'Аудио'})}/>
                    </div>
                    <div className="d-flex flex-row form_radio">
                        <label htmlFor="podcast">Подкаст</label>
                        <input checked={searchParams.format === 'Подкаст' ? 'checked' : ''} type="radio" id="podcast" name="format" 
                            onChange={() => setSearchParams({...searchParams, format: 'Подкаст'})}/>
                    </div>
                    <button className='btn btn-primary mb-4' onClick={() => {
                        setFindedProducts(null)
                        let urlParams = Object.keys(searchParams)
                            .filter(param => searchParams[param] !== '')
                            .reduce((res, key) => (res[key] = searchParams[key], res), {})
                        navigate('?' + new URLSearchParams(urlParams))
                    }}>Поиск</button>
                </div>
                {findedProducts !== null ?
                    <div className="d-flex flex-row flex-wrap mb-3">
                        {findedProducts.map(product =>
                            <ProductCard
                                key={product._id}
                                showType={'normal'}
                                book={product}
                        />)}
                    </div> :
                    <div>
                        <Loading />
                    </div>
                }                   
            </div>
        </div>
    )
}