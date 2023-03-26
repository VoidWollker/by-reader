import React from "react"
import { MainSlider } from "../components/MainSlider"

export const Home = () =>{
    return(
        <div>
            <MainSlider 
                slides={["main-slider slide-1.png", "main-slider slide-2.png"]}
            />
        </div>
    )
}