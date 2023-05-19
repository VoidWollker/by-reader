import "../css/ProductDescription.css"

export const ProductDescription = ({description}) =>{
    return(
        <>
            <div className="w-75 mx-auto">
                <h1>Краткое описание книги</h1>
                <p className="product-description">{description}</p>
            </div>
        </>
    )
}