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
                <div className="d-flex flex-column search-and-menu">    
                    <Search />
                    <div className="d-flex flex-row position-relative">
                        <nav>
                            <ul className="d-flex flex-row menu position-absolute top-0 start-0" style={undottedUL}>
                                <a className="d-flex flex-row"><img src={require("../assets/icons/header-popular.png")} alt="" className="mini-icons" /><li>Популярное</li></a>
                                <a className="d-flex flex-row"><img src={require("../assets/icons/header-new.png")} alt="" className="mini-icons" /><li>Новинки</li></a>
                                <a className="d-flex flex-row"><img src={require("../assets/icons/header-exclusive.png")} alt="" className="mini-icons" /><li>Эксклюзив от Почитателя</li></a>
                                <a className="d-flex flex-row"><img src={require("../assets/icons/header-audiobook.png")} alt="" className="mini-icons" /><li>Аудиокниги</li></a>
                                <a className="d-flex flex-row"><img src={require("../assets/icons/header-podcasts.png")} alt="" className="mini-icons" /><li>Подкасты</li></a>
                                <a className="d-flex flex-row"><img src={require("../assets/icons/header-genres.png")} alt="" className="mini-icons" /><li>Жанры</li></a>
                                <a className="d-flex flex-row"><img src={require("../assets/icons/header-subscription.png")} alt="" className="mini-icons" /><li>Подписки</li></a>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="d-flex flex-pow btn-header">
                    <div className=" d-flex flex-column center-elements">
                        <a href="">
                            <img src={require("../assets/icons/header-entry.png")} alt="Вход" className="log-in" />
                            <p>Вход</p>
                        </a>
                    </div>
                    <div className="d-flex flex-column center-elements">
                        <a href="">
                            <img src={require("../assets/icons/header-bookshelf.png")} alt="Книжная полка" className="book-shelf" />
                            <p>Книжная полка</p>
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
        </div>
    )
}