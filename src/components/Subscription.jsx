import React from "react";
import "../css/Subscription.css"

export const Subscription = ({title,image,numberOfUnitsAvailable,nameOfAvailableUnits,numberOfNewProducts,price}) =>{
    return(
        <>
            <h2 className="h2 w-75 mx-auto">{title}</h2>
            <img src={image} alt="" className="image-subscription "/>
            <div className="d-flex flex-row w-75 mx-auto my-3">
                <img src={require("../assets/icons/subscription-nameOfAvailableUnits.png")} alt="" className="icon-subscription my-auto me-3"/>
                <div>
                    <h2 className="h2">{numberOfUnitsAvailable}</h2>
                    <p className="p">{nameOfAvailableUnits}</p>
                </div>
            </div>
            <div className="d-flex flex-row w-75 mx-auto my-3">
                <img src={require("../assets/icons/subscription-numberOfNewProducts.png")} alt="" className="icon-subscription my-auto me-3"/>
                <div>
                    <h2 className="h2">{numberOfNewProducts}</h2>
                    <p className="p">новинок каждый месяц</p>
                </div>
            </div>
        </>
    )
}