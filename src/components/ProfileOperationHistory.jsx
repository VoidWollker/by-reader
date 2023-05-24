import "../css/ProfileOperationHistory.css"

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
        <div>
            <p className="h2 ms-5 mb-3">История операций</p>
            <div className="profileOperationHistory-empty">
                <img src={require("../assets/icons/profileOperationHistory-empty.png")} className="icon-empty"/>
                <p className="h3 mb-1">Здесь будет отображаться история покупок</p>
                <p className="comment-p mx-auto">Здесь будут храниться книги, которые вы купили на нашем сайте</p>
                <button className="btn btn-primary btn-add-books mt-3">Выбрать книги</button>
            </div>
        </div>
    )
}