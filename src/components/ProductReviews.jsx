export const ProductReviews = (reviews) =>{
    const createReview = (avatar, userName, date, rate, text) =>{
        return(
            <>
                <div className="d-flex flex-row justifu-content-space-between">
                    <div className="d-flex flex-row">
                        <img src="" alt="" />
                        <p>{userName}</p>
                        <p>{date}</p>
                    </div>
                </div>
                <p>{text}</p>
            </>
        )
    }

    return(
        <>
            <h1>Отзывы</h1>
            {reviews.map(review =>{
                return createReview('', 'Nichi', '26.03.2003', 4, 'Yeeeh')
            })}
            <button>Ещё отзывы</button>
            <h1>Оставьте отзыв</h1>
            <div className="d-flexx flex-row">
                <img src="" alt="" />
                <input placeholder="Что вы думаете о книге?"></input>
                <button className="btn btn-secondary">Опубликовать</button>
            </div>
        </>
    )
}