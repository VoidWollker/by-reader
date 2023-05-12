import { useState } from "react"

export const BookShelf = () =>{
    const [selectedCategory, setSelectedCategory] = useState(0)

    return(
        <>
            <p className="h2">Книжная полка</p>
            <div className="d-flex flex-row">
                <div className="d-flex flex-row bookshelf-category bookshelf-category-selected">
                    <img src="" alt="" />
                    <p>Купленные</p>
                </div>
                <div className="d-flex flex-row bookshelf-category">
                    <img src="" alt="" />
                    <p>Просмотренные</p>
                </div>
                <div className="d-flex flex-row bookshelf-category">
                    <img src="" alt="" />
                    <p>Понравившиеся</p>
                </div>
                <div className="d-flex flex-row bookshelf-category">
                    <img src="" alt="" />
                    <p>Корзина</p>
                </div>
            </div>
        </>
    )
}