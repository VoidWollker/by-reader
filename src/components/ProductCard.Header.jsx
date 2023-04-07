export const Header = ({title, price, fakePrice, image}) =>{
    return(
        <>
            <img src={require('../assets/books/' + image)} alt={'Book frontpage'}/>
            <div>
                <p className="product-price">{price}</p>
                <p className="product-fake-price">{fakePrice}</p>
            </div>
            <p className="product-title">{title}</p>
        </>
    )
}
