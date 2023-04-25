import React from "react"
import { MainSlider } from "../components/MainSlider"
import { ProductSlider } from "../components/ProductSlider"
import { ProductCard } from "../components/ProductCard"

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
                    <ProductCard 
                        showType={'normal'}
                        title={'1984'}
                        author={'Джордж Оруэл'}
                        image={'Дизайн 10.png'}
                        price={810}
                        fakePrice={920}
                        format={'Текст'}
                        pageCount={170}
                        rate={4.8}
                        countRates={640}
                    ></ProductCard>,
                ]}
            />
        </div>
    )
}