import { useState } from 'react'
import { useAuth } from '../context/UserContext'
import "../css/ProductCard.css"

export const ProductCard = ({showType, book, style, className}) => {
    const {user, changeUserData} = useAuth()
    const [inCart, setInCart] = useState(user.cart.map(product => product._id).includes(book._id))
    const [inFavourite, setInFavourite] = useState(user.favourite.map(product => product._id).includes(book._id))
    const normalStyle = {width: '85%'}
    const miniStyle = {width: '60%'}
    const squareStyle = {width: '100%', aspectRatio: 1}
    const bigSquareStyle = {width: '110%', aspectRatio: 1}

    const addToCart = () =>{
        changeUserData({cart: [...new Set([...user.cart, {_id: book._id}].map(item => item._id))]
                .map(item => item = {'_id': item})})
        setInCart(true)
    }

    const removeFromCart = () =>{
        changeUserData({cart: [...new Set(user.cart.filter(product => product._id !== book._id))]})
        setInCart(false)
    }

    const addToFavorite = () =>{
        changeUserData({favourite: [...new Set([...user.favourite, {_id: book._id}].map(item => item._id))]
            .map(item => item = {'_id': item})})
        setInFavourite(true)
    }

    const removeFromFavorite = () =>{
        changeUserData({favourite: [...new Set(user.favourite.filter(product => product._id !== book._id))]})
        setInFavourite(false)
    }

    return(
        <div className={`d-flex flex-column ProductCard ${className}`} style={{style}}>
            {!inFavourite ?
                <button onClick={addToFavorite}>
                    <img src="" alt="" />
                </button> :
                <button onClick={removeFromFavorite}>
                    <img src="" alt="" />
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
            <div className="d-flex flex-row align-items-center m-1 mx-0">
                <p className="product-price bordered-primary-text h4 rounded me-1 p-1"><b>{book.price} Р</b></p>
                <p className="product-fake-price mx-1 h4"><s>{book.fakePrice} Р</s></p>
            </div>
            <p className="product-title">{book.title}</p>
            <p className="product-author w-100">{book.author}</p>
            {book.format === 'Текст' ?
                <p className="product-page-count w-100">Страниц: {book.pageCount}</p> :
                <div className="m-1 ms-0">
                    <p className="product-reader w-100 ">Читает: {book.reader}</p>
                    <p className="product-length w-100">Длительность: {book.length}</p>
                </div>
            }
            <div className="d-flex flex-row align-items-center m-1 mx-0 product-format">
                <p className="bordered-primary-text rounded me-1 px-1">{book.format}</p>
                <img src={require('../assets/icons/product-star.png')} alt="" className="icon-rating mx-1"/>
                <p className="product-rate "><b>{book.rate}</b></p>
                <p className="product-rates-count">{book.ratesCount}</p>
            </div>
            {!inCart ?
                <button className="btn btn-tertiary btn-sm my-1 btn-to-cart w-100" onClick={addToCart}><b>В корзину</b></button> :
                <button className="btn btn-fivefold btn-sm my-1 btn-to-cart w-100" onClick={removeFromCart}><b>Купленно</b></button>
            }
        </div>
    )
}