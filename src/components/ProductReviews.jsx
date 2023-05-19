import "../css/ProductReviews.css"

export const ProductReviews = ({reviews}) =>{
    const createReview = (avatar, userName, date, rate, text) =>{
        return(
            <>
                <div className="d-flex flex-column reviews-box my-4 ">
                    <div className="d-flex flex-row justifu-content-space-between reviews-data">
                        <div className="d-flex flex-row align-items-center py-1">
                            <img src="" alt="" />
                            <p className="px-2 review-userName"><b>{userName}</b></p>
                            <p className="px-2 review-date"><b>{date}</b></p>
                        </div>
                    </div>
                    <p className="p-1 ps-2">{text}</p>
                </div>
            </>
        )
    }

    return(
        <>
            <div className="d-flex flex-column w-75 mx-auto">
                <h1 className="pt-4">Отзывы</h1>
                {reviews.map(review =>{
                    return createReview('', 'Nichi', '26.03.2003', 4, 'Yeeeh')
                })}
                <button className="btn btn-primary btn-reviews">Ещё отзывы</button>
                <h1 className="pt-4 pb-2">Оставьте отзыв</h1>
                <div className="d-flex flex-row review-add p-3 flex-wrap justify-content-center">
                    <img src={require("../assets/icons/foto-avatar.png")} alt="" className="avatar"/>
                    <input className="add-review ps-2 mx-3" placeholder="Что вы думаете о книге?"></input>
                    <button className="btn btn-tertiary btn-addReview px-0">Опубликовать</button>
                </div>
            </div>
        </>
    )
}