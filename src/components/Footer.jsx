import React from "react";
import "../css/Footer.css"

export const Footer = () =>{
    const undottedUL = {
        "listStyleType": "none"
    }
    return(
        <div className="d-flex flex-row footer">
            <nav className="d-flex flex-row ">
                <ul className="d-flex flex-column " style={undottedUL}>
                    <li>Почитатель в соц. сетях</li>
                    <a className="d-flex flex-row"><li>ВКонтакте</li></a>
                    <a className="d-flex flex-row"><li>Однокласники</li></a>
                    <a className="d-flex flex-row"><li>Телеграмм</li></a>
                    <a className="d-flex flex-row"><li>YouTube</li></a>
                </ul>
            </nav>
            <nav className="d-flex flex-row position-relative">
                <ul className="d-flex flex-column " style={undottedUL}>
                    <li>Навигация по сайту</li>
                    <a className="d-flex flex-row"><li>Вход и регистрация</li></a>
                    <a className="d-flex flex-row"><li>Личный кабинет</li></a>
                    <a className="d-flex flex-row"><li>Подарок</li></a>
                </ul>
            </nav>
            <nav className="d-flex flex-row position-relative">
                <ul className="d-flex flex-column " style={undottedUL}>
                    <li>Моя книжная полка</li>
                    <a className="d-flex flex-row"><li>Купленные</li></a>
                    <a className="d-flex flex-row"><li>Избранные</li></a>
                    <a className="d-flex flex-row"><li>Вы смотрели</li></a>
                    <a className="d-flex flex-row"><li>Корзина</li></a>
                </ul>
            </nav>
            <nav className="d-flex flex-row position-relative">
                <ul className="d-flex flex-column " style={undottedUL}>
                    <li>Жанры</li>
                    <div className="d-flex flex-row"><a className="d-flex flex-row"><li>Художественная литература</li></a><a className="d-flex flex-row"><li>Саморазвитие</li></a></div>
                    <div className="d-flex flex-row"><a className="d-flex flex-row"><li>Нехудожественная литература</li></a><a className="d-flex flex-row"><li>Научная литература</li></a></div>
                    <div className="d-flex flex-row"><a className="d-flex flex-row"><li>На иностранных языках</li></a><a className="d-flex flex-row"><li>Детям и родителям</li></a></div>
                    <div className="d-flex flex-row"><a className="d-flex flex-row"><li>Бизнес-литература</li></a><a className="d-flex flex-row"><li>Психология</li></a></div>
                    <div className="d-flex flex-row"><a className="d-flex flex-row"><li>Искусство и культура</li></a><a className="d-flex flex-row"><li>Комиксы</li></a></div>
                    <div className="d-flex flex-row"><a className="d-flex flex-row"><li>Эзотерика и спиритизм</li></a><a className="d-flex flex-row"><li>Учебная литература</li></a></div>
                </ul>
            </nav>
        </div>
    )
}