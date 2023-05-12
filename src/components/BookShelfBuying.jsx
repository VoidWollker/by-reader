import { ProductCard} from './ProductCard'

export const BookShelfBuying = (products) =>{
    return(
        <div className="d-flex flex-row">
            {products.map(product =>{
                return(
                    <ProductCard />
                )
            })}
        </div>
    )
}