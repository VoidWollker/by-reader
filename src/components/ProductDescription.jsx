import "../css/ProductDescription.css"

export const ProductDescription = ({description}) =>{
    return(
        <>
            <h1>Краткое описание книги</h1>
            <p className="product-description">{description}</p>
        </>
    )
}