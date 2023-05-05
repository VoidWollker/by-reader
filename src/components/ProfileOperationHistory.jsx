export const ProfileOperationHistory = () =>{
    const createCheck = (id, date, status, products, sum) =>{
        return(
            <>
                <div className="d-flex flex-row justify-content-between">
                    <p className="h3">Покупка №{id} от {date}</p>
                    <p>{status}</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row">
                        {products.map(product =>{
                            return(
                                <img src="" alt="" />
                            )
                        })}
                    </div>
                    <p className="h3">{sum} Р</p>
                </div>
            </>
        )
    }

    return(
        <p className="h2">История операций</p>
    )
}