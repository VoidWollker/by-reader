import { ProductDetials } from "../components/ProductDetails"
import { ProductDescription } from "../components/ProductDescription"
import { ProductQuotes } from "../components/ProductQuotes"
import { ProductReviews }from "../components/ProductReviews"

export const Product = () =>{
    return(
        <>
            <ProductDetials 
                title={1984}
                format={'Текст'}
                author={'Джордж Оруэл'}
                recomendedAge={18}
                publisher={'АСТ'}
                rate={4.8}
                ratesCount={466}
                reviewCount={45}
                price={460}
                fakePrice={660}
                volume={280}
                genre={'Современные детективы'}
                dateWriting={2022}
            />
            <ProductDescription description={'Best Book'}/>
            <ProductQuotes quotes={['Война — это мир, свобода — это рабство, незнание — сила.', `— Сколько я показываю пальцев, Уинстон?
— Четыре.
— А если партия говорит, что их не четыре, а пять, — тогда сколько?..`]}/>
            <ProductReviews reviews={['BEEEEST', 'It sad, but that is real']}/>
        </>
    )
}