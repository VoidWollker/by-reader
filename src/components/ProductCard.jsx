import { useState } from 'react'
import { useAuth } from '../context/UserContext'
import "../css/ProductCard.css"
import { useNavigate } from 'react-router'

export const ProductCard = ({showType, book, style, className}) => {
    const {user, changeUserData} = useAuth()
    const navigate = useNavigate()
    const [inCart, setInCart] = useState(user !== null ? user.cart.map(product => product._id).includes(book._id) : false)
    const [inFavourite, setInFavourite] = useState(user !== null ? user.favourite.map(product => product._id).includes(book._id) : false)
    const normalStyle = {width: '100%'}
    const miniStyle = {width: '95%'}
    const squareStyle = {width: '100%', aspectRatio: 1}
    const bigSquareStyle = {width: '110%', aspectRatio: 1}

    const addToCart = () =>{
        if (user !== null){
           changeUserData({cart: [...new Set([...user.cart, {_id: book._id}].map(item => item._id))]
                .map(item => item = {'_id': item})})
        setInCart(true) 
        } else{
            navigate('/enter', {replace: true})
        }
        
    }

    const removeFromCart = () =>{
        if (user !== null){
            changeUserData({cart: [...new Set(user.cart.filter(product => product._id !== book._id))]})
            setInCart(false)
        } else{
            navigate('/enter', {replace: true})
        }
    }

    const addToFavorite = () =>{
        if (user !== null){
            changeUserData({favourite: [...new Set([...user.favourite, {_id: book._id}].map(item => item._id))]
                .map(item => item = {'_id': item})})
            setInFavourite(true)
        } else{
            navigate('/enter', {replace: true})
        }
    }

    const removeFromFavorite = () =>{
        if (user !== null){
            changeUserData({favourite: [...new Set(user.favourite.filter(product => product._id !== book._id))]})
            setInFavourite(false) 
        } else{
            navigate('/enter', {replace: true})
        }
    }

    return(
        <div className={`d-flex flex-column ProductCard ${className}`} style={{style}}>
            <div className='container'>
                {!inFavourite ?
                    <button className='btn-favorite p-0' onClick={addToFavorite}>
                        <img src={require('../assets/icons/add-to-favorite.png')} alt="" className='add-to-favorite'/>
                    </button> :
                    <button className='btn-favorite p-0' onClick={removeFromFavorite}>
                        <img src={require('../assets/icons/remove-from-favorite.png')} alt="" className='remove-from-favorite'/>
                    </button>
                }
                
                <a href={`/product/?id=${book._id}`}>
                    <img className="img-page-home"
                        src={require('../assets/books/' + book.cover)} 
                        alt={'Book frontpage'}
                        style={showType === 'normal' ? normalStyle :
                                showType === 'mini' ? miniStyle :
                                showType === 'square' ? squareStyle : 
                                showType === 'bigSquare' ? bigSquareStyle :
                                {}
                            }
                    /> 
                </a>
            </div>
            <div className="d-flex flex-row align-items-center m-1 ms-3">
                <p className="product-price bordered-primary-text h4 rounded me-1 p-1"><b>{book.price} Р</b></p>
                <p className="product-fake-price mx-1 h4"><s>{book.fakePrice} Р</s></p>
            </div>
            <p className="product-title ms-3">{book.title}</p>
            <p className="product-author w-100 ms-3">{book.author}</p>
            {book.format === 'Текст' ?
                <p className="product-page-count w-100 ms-3">Страниц: {book.pageCount}</p> :
                <div className="m-1 ms-0">
                    <p className="product-reader w-100 ms-3">Голос: {book.reader}</p>
                    <p className="product-length w-100 ms-3">Длительность: {book.length}</p>
                </div>
            }
            <div className="d-flex flex-row align-items-center m-1 mx-0 product-format ms-3">
                <p className="bordered-primary-text rounded me-1 px-1">{book.format}</p>
                <img src={require('../assets/icons/product-star.png')} alt="" className="icon-rating mx-1"/>
                <p className="product-rate "><b>{book.rate}</b></p>
                <p className="product-rates-count ms-1">{book.ratesCount}</p>
            </div>
            {!inCart ?
                <button className="btn btn-tertiary btn-sm my-1 btn-to-cart w-100 ms-3" onClick={addToCart}><b>В корзину</b></button> :
                <button className="btn btn-fivefold btn-sm my-1 btn-to-cart w-100 ms-3" onClick={removeFromCart}><b>Купленно</b></button>
            }
        </div>
    )
}