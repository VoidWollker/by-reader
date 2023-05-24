import "../css/ProductDescription.css"

export const ProductDescription = ({elementID, description}) =>{
    return(
        <>
            <div className="w-75 mx-auto" id={elementID}>
                <h1>Краткое описание книги</h1>
                <p className="product-description">{description}</p>
            </div>
        </>
    )
}