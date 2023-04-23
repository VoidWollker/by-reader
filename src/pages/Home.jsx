import React from "react"
import { MainSlider } from "../components/MainSlider"
import { ProductSlider } from "../components/ProductSlider"

export const Home = () =>{
    return(
        <div>
            <MainSlider 
                slides={["main-slider slide-1.png", "main-slider slide-2.png"]}
                style={{
                    'maxHeight': 80 + 'vh'
                }}
            />
            <ProductSlider 
                slides={[
                ]}
            />
        </div>
    )
}