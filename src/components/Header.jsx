import React from "react";
import Search from "./Header.Search";
import "../css/Header.css"
import { redirect } from "react-router";

export const Header = () =>{
    const undottedUL = {
        "listStyleType": "none"
    }

    return(
        <header className="d-flex flex-row ">
            <a href="/"><img src={require("../assets/icons/header-logo.png")} alt="Логотип сайта" className="logo mb-3" /></a>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                <div className="d-flex flex-column search-and-menu">    
                    <Search />
                    <div className="d-flex flex-row position-relative ">
                        <nav>
                            <ul className="d-flex flex-row  menu position-absolute top-0 start-0 flex-container flex-wrap justify-content-center ms-2 my-1" style={undottedUL}>
                                <li className="d-flex flex-row"><img src={require("../assets/icons/header-popular.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Популярное</a></li>
                                <li className="d-flex flex-row"><img src={require("../assets/icons/header-new.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Новинки</a></li>
                                <li className="d-flex flex-row w-min"><img src={require("../assets/icons/header-exclusive.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Эксклюзив от Почитателя</a></li>
                                <li className="d-flex flex-row"><img src={require("../assets/icons/header-audiobook.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Аудиокниги</a></li>
                                <li className="d-flex flex-row"><img src={require("../assets/icons/header-podcasts.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Подкасты</a></li>
                                <li className="d-flex flex-row"><img src={require("../assets/icons/header-genres.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Жанры</a></li>
                                <li className="d-flex flex-row" ><img src={require("../assets/icons/header-subscription.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Подписки</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="d-flex flex-pow btn-header">
                    <div className=" d-flex flex-column center-elements">
                        <a href="/profile">
                            <img src={require("../assets/icons/header-entry.png")} alt="Вход" className="log-in" />
                            <p>Вход</p>
                        </a>
                    </div>
                    <div className="d-flex flex-column center-elements">
                        <a href="/profile/bookShelf">
                            <img src={require("../assets/icons/header-bookshelf.png")} alt="Книжная полка" className="book-shelf" />
                            <p className="bookshelf">Книжная полка</p>
                        </a>
                    </div>
                    <div className="d-flex flex-column center-elements">
                        <a href="">
                            <img src={require("../assets/icons/header-gift.png")} alt="Подарок" className="gift" />
                            <p>Подарок</p>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}