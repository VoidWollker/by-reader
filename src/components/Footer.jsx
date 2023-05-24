import React from "react";
import "../css/Footer.css"

export const Footer = () =>{
    const undottedUL = {
        "listStyleType": "none"
    }
    return(
        <footer className="d-flex flex-row ">
            <div className="d-flex flex-row blocks flex-wrap ">
                <nav className="d-flex flex-row mt-5 footer-p">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Почитатель в соц. сетях</b></li>
                        <a href=""className=""><li>ВКонтакте</li></a>
                        <a href=""className=""><li>Однокласники</li></a>
                        <a href=""className=""><li>Телеграмм</li></a>
                        <a href=""className=""><li>YouTube</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row mt-5 footer-p">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Навигация по сайту</b></li>
                        <a href=""className=""><li>Вход и регистрация</li></a>
                        <a href=""className=""><li>Личный кабинет</li></a>
                        <a href=""className=""><li>Подарок</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row mt-5">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Моя книжная полка</b></li>
                        <a href=""className=""><li>Купленные</li></a>
                        <a href=""className=""><li>Избранные</li></a>
                        <a href=""className=""><li>Вы смотрели</li></a>
                        <a href=""className=""><li>Корзина</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row my-5 footer-ps">
                    <ul className="" style={undottedUL}>
                        <li className="heading-footer"><b>Жанры</b></li>
                        <div className="d-flex flex-row ">
                            <div className="d-flex flex-column ">
                                <a href=""className="genres-link"> <li>Художественная литература</li> </a>
                                <a href=""className="genres-link"><li>Нехудожественная литература</li></a>
                                <a href=""className="genres-link"><li>На иностранных языках</li></a>
                                <a href=""className="genres-link"><li>Бизнес-литература</li></a>
                                <a href=""className="genres-link"><li>Искусство и культура</li></a>
                                <a href=""className="genres-link"><li>Эзотерика и спиритизм</li></a>
                            </div>
                            <div className="d-flex flex-column">
                                <a href=""className="genres-link"> <li>Саморазвитие</li></a>
                                <a href=""className="genres-link"><li>Научная литература</li></a>
                                <a href=""className="genres-link"><li>Детям и родителям</li></a>
                                <a href=""className="genres-link"><li>Психология</li></a>
                                <a href=""className="genres-link"><li>Комиксы</li></a>
                                <a href=""className="genres-link"><li>Учебная литература</li></a>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}