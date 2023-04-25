import React from "react";
import "../css/Header.Search.css"

export default function Search(){
    return(
        <div className="d-flex flex-row search">
            <button className="btn btn-primary my-1 px-3 py-3 advanced-search position-relative">
                <img src={require("../assets/icons/header-advanced-search.png")} alt="Расширинный поиск" className="img-advanced-search position-absolute top-50 start-50 translate-middle" />
            </button>
            <input type="text" />
            <button className="btn btn-primary my-1 px-3 py-3 search-btn position-relative">
                <img src={require("../assets/icons/header-search.png")} alt="Поиск" className="img-search position-absolute top-50 start-50 translate-middle" />
            </button>
        </div>
    )
}

// style = {{
//     'minWidth': 100 + '%',
//     'maxWidth': 100 + '%',
// }}