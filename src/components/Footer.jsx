import React from "react";
import "../css/Footer.css"

export const Footer = () =>{
    const undottedUL = {
        "listStyleType": "none"
    }
    return(
        <footer className="d-flex flex-row">
            <div className="d-flex flex-row blocks">
                <nav className="d-flex flex-row block ">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Почитатель в соц. сетях</b></li>
                        <a className=""><li>ВКонтакте</li></a>
                        <a className=""><li>Однокласники</li></a>
                        <a className=""><li>Телеграмм</li></a>
                        <a className=""><li>YouTube</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row block ">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Навигация по сайту</b></li>
                        <a className=""><li>Вход и регистрация</li></a>
                        <a className=""><li>Личный кабинет</li></a>
                        <a className=""><li>Подарок</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row block">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Моя книжная полка</b></li>
                        <a className=""><li>Купленные</li></a>
                        <a className=""><li>Избранные</li></a>
                        <a className=""><li>Вы смотрели</li></a>
                        <a className=""><li>Корзина</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row block1">
                    <ul className="d-flex flex-column" style={undottedUL}>
                        <li className="heading-footer"><b>Жанры</b></li>
                        <div className="d-flex flex-row">
                            <a className="genres-link"> <li>Художественная литература</li> </a>
                            <a > <li>Саморазвитие</li></a>
                        </div>
                        <div className="d-flex flex-row">
                            <a className="genres-link"><li>Нехудожественная литература</li></a>
                            <a ><li>Научная литература</li></a>
                        </div>
                        <div className="d-flex flex-row">
                            <a className="genres-link"><li>На иностранных языках</li></a>
                            <a ><li>Детям и родителям</li></a>
                        </div>
                        <div className="d-flex flex-row">
                            <a className="genres-link"><li>Бизнес-литература</li></a>
                            <a ><li>Психология</li></a>
                        </div>
                        <div className="d-flex flex-row">
                            <a className="genres-link"><li>Искусство и культура</li></a>
                            <a ><li>Комиксы</li></a>
                        </div>
                        <div className="d-flex flex-row">
                            <a className="genres-link"><li>Эзотерика и спиритизм</li></a>
                            <a ><li>Учебная литература</li></a>
                        </div>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}