import React from "react"
import { MainSlider } from "../components/MainSlider"
import { ProductCardHeader } from "../components/ProductCardHeaderHeader"
import { ProductSlider } from "../components/ProductSlider"

export const Home = () =>{
    return(
        <div>
            <MainSlider 
                slides={["main-slider slide-1.png", "main-slider slide-2.png"]}
            />
            <ProductSlider 
                slides={[
                    <ProductCardHeader title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCardHeader title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCardHeader title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCardHeader title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCardHeader title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCardHeader title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCardHeader title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCardHeader title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCardHeader title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCardHeader title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCardHeader title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCardHeader title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCardHeader title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCardHeader title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                ]}
            />
        </div>
    )
}