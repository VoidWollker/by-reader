export const ProductDetials = ({title, format, author, recomendedAge, publisher, seria, rate, ratesCount, reviewCount}) =>{
    return(
        <div className="d-flex flex-row">
            <div className="d-flex flex-column"></div>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    <p className="product-title">{title}</p>
                    <p className="product-format"></p>
                    <p className="product-recomended-age">+{recomendedAge}</p>
                </div>
                <div className="d-flex flex-row">
                    <p>Автор:</p>
                    <p>{author}</p>
                </div>
                <div className="d-flex flex-row">
                    <p>Издательство:</p>
                    <p>{publisher}</p>
                </div>
                <div className="d-flex flex-row">
                    <p>Серия:</p>
                    <p>{seria}</p>
                </div>
                <div className="d-flex flex-row">
                    <div className="d-flex-flex-column">
                        <div className="d-flex flex-row">
                            <img src="" alt="" />
                            <p>{rate}</p>
                        </div>
                        <p>{ratesCount}</p>
                    </div>
                    <div className="d-flex-flex-column">
                        <div className="d-flex flex-row">
                            <img src="" alt="" />
                            <p>{reviewCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}