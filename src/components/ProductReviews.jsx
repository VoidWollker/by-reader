import { useState} from 'react'
import "../css/ProductReviews.css"

export const ProductReviews = ({elementID, reviews, reviewsCount, increaseReviewsCount, writeReview}) =>{
    const [reviewText, setReviewText] = useState('')

    const createReview = (avatar, userName, date, rate, text) =>{
        return(
            <div className="d-flex flex-column reviews-box my-4 ">
                <div className="d-flex flex-row justifu-content-space-between reviews-data">
                    <div className="d-flex flex-row align-items-center py-1">
                        <img src="" alt="" />
                        <p className="px-2 review-userName"><b>{userName}</b></p>
                        <p className="px-2 review-date"><b>{date}</b></p>
                    </div>
                </div>
                <p className="p-1 ps-3">{text}</p>
            </div>
        )
    }


    return(
        <div className="d-flex flex-column w-75 mx-auto" id={elementID}>
            <h1 className="pt-4">Отзывы</h1>
            {reviews.map((review, index) =>
                index <= reviewsCount - 1 ? 
                    createReview('', review.username, review.writeDate, 4, review.text) :
                    ''
            )}
            {reviews.length > reviewsCount ?
                <button className="btn btn-primary btn-reviews" onClick={increaseReviewsCount}>Ещё отзывы</button> :
                ''
            }
            <h1 className="pt-4 pb-2">Оставьте отзыв</h1>
            <div className="d-flex flex-row review-add p-3 flex-wrap justify-content-center">
                <img src={require("../assets/icons/foto-avatar.png")} alt="" className="avatar mt-2"/>
                <input className="add-review ps-2 mx-3 mb-2 mt-2" placeholder="Что вы думаете о книге?"
                    onChange={e => setReviewText(e.target.value)}    
                />
                <button className="btn btn-tertiary btn-addReview px-0" onClick={() => writeReview(reviewText)}>Опубликовать</button>
            </div>
        </div>
    )
}