import { useState, useEffect } from "react"
import { ClientEmpty } from "../components/ClientEmpty"
import { ProductCard } from "../components/ProductCard"
import "../css/BookShelf.css"
import { Loading } from '../components/Loading'
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router"

export const BookShelf = ({selectedIndex}) =>{
    const {user} = useAuth()
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState(selectedIndex)
    const [purchasedProducts, setPurchasedProducts] = useState(null)
    const [viewedProducts, setViewedProducts] = useState(null)
    const [favouriteProducts, setFavouriteProducts] = useState(null)
    const [cartProducts, setCartProducts] = useState(null)

    const getPurchasedProducts = () =>{
        if (user.purchased.length !== 0){
            user.purchased.forEach(purchasedProduct =>{
                getProductData(purchasedProduct._id)
                    .then(productData => {setPurchasedProducts(purchasedProducts => [...purchasedProducts ?? [], productData])})
                
            })
        } else{
            setPurchasedProducts([])
        }
    }

    const getViewedProducts = () =>{
        if (user.viewed.length !== 0){
            user.viewed.forEach(viewedProduct =>{
                getProductData(viewedProduct._id)
                    .then(productData => {setViewedProducts(viewedProducts => [...viewedProducts ?? [], productData])})
                
            }) 
        } else{
            setViewedProducts([])
        }
    }

    const getFavouriteProducts = () =>{
        if (user.favourite.length !== 0){
            user.favourite.forEach(favouriteProduct =>{
                getProductData(favouriteProduct._id)
                    .then(productData => {setFavouriteProducts(favouriteProducts => [...favouriteProducts ?? [], productData])})
                
            })
        } else{
            setFavouriteProducts([])
        }
    }

    const getCartProducts = () =>{
        if (user.cart.length !== 0){
            user.cart.forEach(cartProduct =>{
                getProductData(cartProduct._id)
                    .then(productData => {setCartProducts(cartProducts => [...cartProducts ?? [], productData])})
                
            })
        } else{
            setCartProducts([])
        }
    }

    const getProductData = async (id) => 
        await fetch(`http://localhost:5000/book/${id}`)
            .then(productData => productData.json())

    useEffect(() => {
        const items = document.getElementsByClassName('bookshelf-category')
        items[selectedCategory].classList.add('bookshelf-category-selected')
        if (selectedCategory === 0 && purchasedProducts === null){
            getViewedProducts()
        } else if (selectedCategory === 1 && viewedProducts === null){
            getViewedProducts()
        } else if (selectedCategory === 2 && favouriteProducts === null){
            getFavouriteProducts()
        } else if (selectedCategory === 3 && cartProducts === null){
            getCartProducts()
        }
    }, [selectedCategory])

    const selectBookShelfListItem = (index) =>{
        const items = document.getElementsByClassName('bookshelf-category')
        items[selectedCategory].classList.remove('bookshelf-category-selected')
        setSelectedCategory(index)
    }

    const showSelectedCategory = () =>
        <div className="d-flex flex-row w-75 mx-auto flex-wrap">
            {selectedCategory === 0 ?
                showPurchasedProducts() :    
            selectedCategory === 1 ?
                showViewedProducts() :
            selectedCategory === 2 ?
                showFavouriteProducts() :
            selectedCategory === 3 ?
                showCartProducts() :
                ''
            }
        </div>

    const showPurchasedProducts = () =>
        purchasedProducts !== null ?
        <>{
            purchasedProducts.length > 0 ?
            purchasedProducts.map((product, index) =>
                    <ProductCard 
                        key={`viewed-product-${index}`}
                        showType={'normal'}
                        book={product}
                    />
                ) :
            showEmptyInCategory()
        }</> :
        <Loading /> 

    const showViewedProducts = () =>
        viewedProducts !== null ?
        <>{
            viewedProducts.length > 0 ?
            viewedProducts.map((product, index) =>
                    <ProductCard 
                        key={`viewed-product-${index}`}
                        showType={'normal'}
                        book={product}
                    />
                ) :
            showEmptyInCategory()
        }</> :
        <Loading />  
        
    const showFavouriteProducts = () =>
        favouriteProducts !== null ?
        <>{ 
            favouriteProducts.length > 0 ?
            favouriteProducts.map((product, index) =>
                    <ProductCard 
                        key={`favourite-product-${index}`}
                        showType={'normal'}
                        book={product}
                    />
                ) :
            showEmptyInCategory()
        }</> :
        <Loading />

    const showCartProducts = () =>
        cartProducts !== null ?
        <>{ 
            cartProducts.length > 0 ?
            cartProducts.map((product, index) =>
                    <ProductCard 
                        key={`cart-product-${index}`}
                        showType={'normal'}
                        book={product}
                    />
                ) :
            showEmptyInCategory()
        }</> :
        <Loading />

    const showEmptyInCategory = () =>
        selectedCategory === 0 ?
            <div className="w-75"> 
                <ClientEmpty
                    icon={require("../assets/icons/profileOperationHistory-empty.png")}
                    title={'Здесь будут ваши купленные книги'}
                    description={'Здесь будут храниться книги, которые вы купили на нашем сайте'}            
                />
                <button className="btn btn-primary btn-add-books" onClick={() => navigate('/', {replace: true})}>Выбрать книги</button> 
            </div> :
        selectedCategory === 1 ?
            <div className="w-75"> 
                <ClientEmpty
                    icon={require("../assets/icons/bookshelf-viewed-big.png")}
                    title={'Здесь будут ваши просмотренные книги'}
                    description={'Здесь будут храниться книги, которые вы просматриваете на нашем сайте'}            
                />
                <button className="btn btn-primary btn-add-books" onClick={() => navigate('/', {replace: true})}>Выбрать книги</button> 
            </div>:
        selectedCategory === 2 ?
            <div className="w-75"> 
                <ClientEmpty
                    icon={require("../assets/icons/bookshelf-liked-big.png")}
                    title={'Здесь будут ваши понравившиеся книги'}
                    description={'Чтобы отложить книгу для будущей покупки, нажмите «Отложить» рядом с ней'}            
                />
                <button className="btn btn-primary btn-add-books" onClick={() => navigate('/', {replace: true})}>Выбрать книги</button> 
            </div>:
        selectedCategory === 3 ?
            <div className="w-75"> 
                <ClientEmpty
                    icon={require("../assets/icons/bookshelf-basket-big.png")}
                    title={'Добавьте сюда книги для покупки'}
                    description={'Чтобы добавить книги в корзину, нажмите на кнопку «В корзину» у понравившихся книги'}            
                />
                <button className="btn btn-primary btn-add-books" onClick={() => navigate('/', {replace: true})}>Выбрать книги</button> 
            </div>:
        ''

    return(
        <div className="pb-5">
            <p className="h2 w-75 mx-auto pt-4">Книжная полка</p>
            <ul className="list-unstyled d-flex flex-row nav nav-tabs my-4 w-75 mx-auto">
                <li className="bookshelf-category bookshelf-category-selected" id="bookshelf-category-0">
                    <button className="d-flex flex-row mx-2 border-0" onClick={() => selectBookShelfListItem(0)}>
                        <img src={require("../assets/icons/bookshelf-purchased.png")} alt="" className="my-auto me-1"/>
                        <p>Купленные</p>
                    </button>
                </li>
                <li className="bookshelf-category" id="bookshelf-category-1">
                    <button className="d-flex flex-row mx-2 border-0" onClick={() => selectBookShelfListItem(1)}>
                        <img src={require("../assets/icons/bookshelf-viewed.png")} alt="" className="my-auto me-1"/>
                        <p>Просмотренные</p>
                    </button>                   
                </li>
                <li className="bookshelf-category" id="bookshelf-category-2">
                    <button className="d-flex flex-row  mx-2 border-0" onClick={() => selectBookShelfListItem(2)}>
                        <img src={require("../assets/icons/bookshelf-liked.png")} alt="" className="my-auto me-1"/>
                        <p>Понравившиеся</p>
                    </button>                    
                    </li>
                <li className="bookshelf-category" id="bookshelf-category-3">
                    <button className="d-flex flex-row mx-2 border-0" onClick={() => selectBookShelfListItem(3)}>
                        <img src={require("../assets/icons/bookshelf-basket.png")} alt="" className="my-auto me-1"/>
                        <p>Корзина</p>
                    </button>                   
                </li>
            </ul>
            {showSelectedCategory()}
        </div>
    )
}