import React from "react"
import { MainSlider } from "../components/MainSlider"
import { ProductCard } from "../components/ProductCard"
import { ProductSlider } from "../components/ProductSlider"

export const Home = () =>{
    return(
        <div>
            <MainSlider 
                slides={["main-slider slide-1.png", "main-slider slide-2.png"]}
            />
            <ProductSlider 
                slides={[
                    <ProductCard title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCard title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCard title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCard title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCard title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCard title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCard title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCard title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCard title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCard title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCard title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCard title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                    <ProductCard title={'Garry Potter'} price={1200} image={'../assets/img/main-slider slide-1.png'} />,
                    <ProductCard title={'Garry Potter 2'} price={300} image={'../assets/img/main-slider slide-2.png'} />,
                ]}
            />
        </div>
    )
}