import React from "react";
import Search from "./Header.Search";
import "../css/Header.css"
import { useAuth } from '../context/UserContext'

export const Header = () =>{
    const { user } = useAuth()      

    const undottedUL = {
        "listStyleType": "none"
    }

    return(
        <header className="d-flex flex-row ">
            <a href="/"><img src={require("../assets/icons/header-logo.png")} alt="Логотип сайта" className="logo mb-3" /></a>
            <div className="d-flex flex-row flex-wrap justify-content-center mt-4">
                <div className="d-flex flex-column search-and-menu">    
                    <Search />
                    <div className="d-flex flex-row position-relative ">
                        <nav>
                            <ul className="d-flex flex-row  menu position-absolute top-0 start-0 flex-container flex-wrap justify-content-center my-1 ms-0" 
                                style={undottedUL}>
                                <li className="d-flex flex-row"><img src={require("../assets/icons/header-popular.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Популярное</a></li>
                                <li className="d-flex flex-row">
                                    <a href="http://localhost:3000/#newest" className="mt-1">
                                        <img src={require("../assets/icons/header-new.png")} alt="" className="mini-icons" />
                                        Новинки
                                    </a>
                                </li>
                                <li className="d-flex flex-row w-min"><img src={require("../assets/icons/header-exclusive.png")} alt="" className="mini-icons" /><a href="" className="mt-1">Эксклюзив от Почитателя</a></li>
                                <li className="d-flex flex-row">
                                    <a href="http://localhost:3000/#audio" className="mt-1">
                                        <img src={require("../assets/icons/header-audiobook.png")} alt="" className="mini-icons" />
                                        Аудиокниги</a>
                                    </li>
                                <li className="d-flex flex-row">
                                    <a href="" className="mt-1">
                                        <img src={require("../assets/icons/header-podcasts.png")} alt="" className="mini-icons" />
                                        Подкасты</a>
                                    </li>
                                <li className="d-flex flex-row">
                                    <a href="" className="mt-1">
                                        <img src={require("../assets/icons/header-genres.png")} alt="" className="mini-icons" />
                                        Жанры</a>
                                    </li>
                                <li className="d-flex flex-row">
                                    <a href="" className="mt-1">
                                        <img src={require("../assets/icons/header-subscription.png")} alt="" className="mini-icons" />
                                        Подписки</a>
                                    </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="d-flex flex-pow btn-header">
                    <div className=" d-flex flex-column center-elements">
                        {user !== null ?
                            <a href="/profile">
                                <img src={require("../assets/icons/icon-profile.png")} alt="Вход" className="log-in" />
                                <p>Профиль</p>
                            </a> :
                            <a href="/enter">
                                <img src={require("../assets/icons/header-entry.png")} alt="Вход" className="log-in" />
                                <p>Вход</p>
                            </a>
                            
                        }
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