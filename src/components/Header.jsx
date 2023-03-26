import React from "react";
import Search from "./Header.Search";

export const Header = () =>{
    const undottedUL = {
        "listStyleType": "none"
    }

    return(
        <div className="d-flex flex-column">
            <div className="d-flex flex-row">
                <a href=""><img src="" alt="" className="logo" /></a>
                <Search />
                <a href=""><img src="" alt="" className="log-in" /></a>
                <a href=""><img src="" alt="" className="book-shelf" /></a>
                <a href=""><img src="" alt="" className="gift" /></a>
            </div>
            <div className="d-flex flex-row">
                <nav>
                    <ul className="d-flex flex-row" style={undottedUL}>
                        <a><li>Новинки</li></a>
                        <a><li>Аудиокниги</li></a>
                        <a><li>Подборки</li></a>
                        <a><li>Подписки</li></a>
                    </ul>
                </nav>
            </div>
        </div>
    )
}