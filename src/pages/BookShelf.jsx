import { useState, useEffect } from "react"
import { ClientEmpty } from "../components/ClientEmpty"
import { ProductCard } from "../components/ProductCard"
import "../css/BookShelf.css"
import { useAuth } from "../context/UserContext"

export const BookShelf = ({selectedIndex}) =>{
    const {user} = useAuth()
    const [selectedCategory, setSelectedCategory] = useState(selectedIndex)
    const [viewedProducts, setViewedProducts] = useState([])

    const getViewedProducts = () =>{
        let result = []
        user.viewed.forEach(viewedProduct =>{
            getProductData(viewedProduct._id)
                .then(productData => {console.log('add to result'); result.push(productData)})
            
        })
        console.log('Result is ');
        console.log(result);
        setViewedProducts(result)
    }

    const getProductData = async (id) => 
        await fetch(`http://localhost:5000/book/${id}`)
            .then(productData => productData.json())

    useEffect(() => {
        console.log(`Select category - ${selectedCategory}`);
        const items = document.getElementsByClassName('bookshelf-category')
        items[selectedCategory].classList.add('bookshelf-category-selected')
    }, [selectedCategory])

    const selectBookShelfListItem = (index) =>{
        const items = document.getElementsByClassName('bookshelf-category')
        items[selectedCategory].classList.remove('bookshelf-category-selected')
        setSelectedCategory(index)

        if (selectedCategory === 1){
            getViewedProducts()
        }
    }

    const showSelectedCategory = () =>
        selectedCategory === 1 ?
            showViewedProducts() :
            ''

    const showViewedProducts = () =>{
        console.log(viewedProducts);
        return viewedProducts !== null ?
            viewedProducts.map(product =>
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
                />
            ) :
            showEmptyInCategory()
        }

    

    const showEmptyInCategory = () =>
        selectedCategory === 0 ?
            <ClientEmpty
                icon={require("../assets/icons/profileOperationHistory-empty.png")}
                title={'Здесь будут ваши купленные книги'}
                description={'Здесь будут храниться книги, которые вы купили на нашем сайте'}            
            /> :
        selectedCategory === 1 ?
            <ClientEmpty
                icon={require("../assets/icons/bookshelf-viewed-big.png")}
                title={'Здесь будут ваши просмотренные книги'}
                description={'Здесь будут храниться книги, которые вы просматриваете на нашем сайте'}            
            /> :
        selectedCategory === 2 ?
            <ClientEmpty
                icon={require("../assets/icons/bookshelf-liked-big.png")}
                title={'Здесь будут ваши понравившиеся книги'}
                description={'Чтобы отложить книгу для будущей покупки, нажмите «Отложить» рядом с ней'}            
            /> :
        selectedCategory === 3 ?
            <ClientEmpty
                icon={require("../assets/icons/bookshelf-basket-big.png")}
                title={'Добавьте сюда книги для покупки'}
                description={'Чтобы добавить книги в корзину, нажмите на кнопку «В корзину» у понравившихся книги'}            
            /> :
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