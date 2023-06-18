import React from "react";
import { Subscription } from "../components/Subscription"
import "../css/Subscriptions.css"

var Colors = { "bcFirst": "#0F0D18",
                    "bcSecond": "#335B50",
                    "bcThird": "#75B4A2",
                    "color": "#F2F2EA"
};

export const Subscriptions = () =>{
    return(
        <div className="d-flex flex-row flex-wrap justify-content-center ">
            <div className="subscription py-5 mx-4" style={{backgroundColor: Colors.bcFirst, color:Colors.color}}>
                <Subscription
                    title={'Книги по одной подписке'}
                    image={require("../assets/icons/first-subscription.png")}
                    numberOfUnitsAvailable={'80 000'}
                    nameOfAvailableUnits={'книг'}
                    numberOfNewProducts={'300+'}
                />
                <button className="btn btn-fivefold btn-subscription" style={{backgroundColor: Colors.bcThird,border:0}}>ПОДКЛЮЧИТЬ ЗА 150 ₽</button>
                <p className="p w-75 mx-auto mt-1">Далее 150 ₽ в месяц. Продление автоматическое, отменить можно в любой момент.</p>
            </div>
            <div className="subscription subscription-second  py-5 mx-4" style={{backgroundColor: Colors.bcSecond, color:Colors.color}}>
                <Subscription
                    title={'Книги и аудиокниги по одной подписке'}
                    image={require("../assets/icons/second-subscription.png")}
                    numberOfUnitsAvailable={'120 000'}
                    nameOfAvailableUnits={'книг и аудиокниг'}
                    numberOfNewProducts={'600+'}
                />
                <button className="btn btn-fivefold btn-subscription" style={{backgroundColor: Colors.bcFirst, border:0}} >ПОДКЛЮЧИТЬ ЗА 300 ₽</button>
                <p className="p w-75 mx-auto mt-1">Далее 300 ₽ в месяц. Продление автоматическое, отменить можно в любой момент.</p>
            </div>
            <div className="subscription subscription-third py-5 mx-4" style={{backgroundColor: Colors.bcThird, color:Colors.color}}>
                <Subscription
                    title={'Книги, аудиокниги и подкасты по одной подписке'}
                    image={require("../assets/icons/third-subscription.png")}
                    numberOfUnitsAvailable={'190 000'}
                    nameOfAvailableUnits={'книг, аудиокниг и подкастов'}
                    numberOfNewProducts={'1000+'}
                />
                <button className="btn btn-fivefold btn-subscription" style={{backgroundColor: Colors.bcSecond,border:0}}>ПОДКЛЮЧИТЬ ЗА 450 ₽</button>
                <p className="p w-75 mx-auto mt-1">Далее 450 ₽ в месяц. Продление автоматическое, отменить можно в любой момент.</p>
            </div>
        </div>
    )
}