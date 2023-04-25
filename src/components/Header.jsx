import React from "react";
import Search from "./Header.Search";
import "../css/Header.css"

export const Header = () =>{
    const undottedUL = {
        "listStyleType": "none"
    }

    return(
        <div className="d-flex flex-row header">
            <a href=""><img src={require("../assets/icons/header-logo.png")} alt="Логотип сайта" className="logo" /></a>
            <div className="d-flex flex-row">
                <Search />
                <a href=""><img src={require("../assets/icons/header-entry.png")} alt="Вход" className="log-in" /></a>
                <a href=""><img src={require("../assets/icons/header-bookshelf.png")} alt="Книжная полка" className="book-shelf" /></a>
                <a href=""><img src={require("../assets/icons/header-gift.png")} alt="Подарок" className="gift" /></a>
            </div>
            <div className="d-flex flex-row">
                <nav>
                    <ul className="d-flex flex-row" style={undottedUL}>
                        <a><img src="" alt="" className="log-in" /><li>Новинки</li></a>
                        <a><li>Аудиокниги</li></a>
                        <a><li>Подборки</li></a>
                        <a><li>Подписки</li></a>
                    </ul>
                </nav>
            </div>
        </div>
    )
}