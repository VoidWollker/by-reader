import "../css/ProductDescription.css"

export const ProductDescription = ({elementID, description}) =>{
    return(
        <>
            <div className="d-flex flex-column w-75 mx-auto" id={elementID}>
                <h1>Краткое описание книги</h1>
                <p className="product-description">{description.map(paragraph => <p>{paragraph}</p>)}</p>
            </div>
        </>
    )
}