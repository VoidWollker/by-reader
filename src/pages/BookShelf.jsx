import { useState } from "react"
import "../css/BookShelf.css"

export const BookShelf = () =>{
    const [selectedCategory, setSelectedCategory] = useState(0)

    return(
        <>
            <p className="h2 w-75 mx-auto">Книжная полка</p>
            <div className="nav nav-tabs my-4 w-75 mx-auto">
                <button className="d-flex flex-row bookshelf-category bookshelf-category-selected mx-2">
                    <img src={require("../assets/icons/bookshelf-purchased.png")} alt="" className="my-auto me-1"/>
                    <p>Купленные</p>
                </button>
                <button className="d-flex flex-row bookshelf-category mx-2">
                    <img src={require("../assets/icons/bookshelf-viewed.png")} alt="" className="my-auto me-1"/>
                    <p>Просмотренные</p>
                </button>
                <button className="d-flex flex-row bookshelf-category mx-2">
                    <img src={require("../assets/icons/bookshelf-liked.png")} alt="" className="my-auto me-1"/>
                    <p>Понравившиеся</p>
                </button>
                <button className="d-flex flex-row bookshelf-category mx-2">
                    <img src={require("../assets/icons/bookshelf-basket.png")} alt="" className="my-auto me-1"/>
                    <p>Корзина</p>
                </button>
            </div>
        </>
    )
}