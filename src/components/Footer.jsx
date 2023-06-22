import React from "react";
import "../css/Footer.css"

export const Footer = () =>{
    const undottedUL = {
        "listStyleType": "none"
    }
    return(
        <footer className="d-flex flex-row ">
            <div className="d-flex flex-row blocks flex-wrap ">
                <nav className="d-flex flex-row footer-p">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Почитатель в соц. сетях</b></li>
                        <a href=""className=""><li>ВКонтакте</li></a>
                        <a href=""className=""><li>Однокласники</li></a>
                        <a href=""className=""><li>Телеграмм</li></a>
                        <a href=""className=""><li>YouTube</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row footer-p">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Навигация по сайту</b></li>
                        <a href=""className=""><li>Вход и регистрация</li></a>
                        <a href=""className=""><li>Личный кабинет</li></a>
                        <a href=""className=""><li>Подарок</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row mb-4 ">
                    <ul className="d-flex flex-column footer-links" style={undottedUL}>
                        <li className="heading-footer"><b>Моя книжная полка</b></li>
                        <a href=""className=""><li>Купленные</li></a>
                        <a href=""className=""><li>Избранные</li></a>
                        <a href=""className=""><li>Вы смотрели</li></a>
                        <a href=""className=""><li>Корзина</li></a>
                    </ul>
                </nav>
                <nav className="d-flex flex-row  footer-ps mb-5">
                    <ul className="" style={undottedUL}>
                        <li className="heading-footer"><b>Жанры</b></li>
                        <div className="d-flex flex-row ">
                            <div className="d-flex flex-column ">
                                <a href=""className="genres-link"> <li>Художественная литература</li> </a>
                                <a href=""className="genres-link"><li>Нехудожественная литература</li></a>
                                <a href=""className="genres-link"><li>Юмористическая литература</li></a>
                                <a href=""className="genres-link"><li>Ужасы</li></a>
                                <a href=""className="genres-link"><li>Публицистика</li></a>
                                <a href=""className="genres-link"><li>Зарубежная классика</li></a>
                            </div>
                            <div className="d-flex flex-column">
                                <a href=""className="genres-link"> <li>Боевики</li></a>
                                <a href=""className="genres-link"><li>Фэнтези</li></a>
                                <a href=""className="genres-link"><li>Детективы</li></a>
                                <a href=""className="genres-link"><li>Фантастика</li></a>
                                <a href=""className="genres-link"><li>Роман</li></a>
                                <a href=""className="genres-link"><li>Приключения</li></a>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}