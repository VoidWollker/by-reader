import { useState, useEffect} from 'react'
import "../css/ProductReviews.css"

export const ProductReviews = ({elementID, reviews}) =>{
    // const [reviewsData, setReviewsData] = useState([])

    // useEffect(() =>{
    //     const result = []
    //     reviews.map(async review => {
    //         await fetch(`http://localhost:5000/user/getByID/${review.user}`)
    //             .then(userData => userData.json())
    //             .then(user => {
    //                 result.push({
    //                     username: require(user.username),
    //                     writingDate: '22.10.2003',
    //                     text: review.text
    //                     })
    //             }) 
    //     })
    //     console.log(result);
    //     setReviewsData(result)
    // }, [])

    // useEffect(() => {}, [reviewsData])

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
                <p className="p-1 ps-2">{text}</p>
            </div>
        )
    }

    return(
        <div className="d-flex flex-column w-75 mx-auto" id={elementID}>
            <h1 className="pt-4">Отзывы</h1>
            {reviews.map(review =>
                createReview('', review.username, review.writeDate, 4, review.text))
            }
            <button className="btn btn-primary btn-reviews">Ещё отзывы</button>
            <h1 className="pt-4 pb-2">Оставьте отзыв</h1>
            <div className="d-flex flex-row review-add p-3 flex-wrap justify-content-center">
                <img src={require("../assets/icons/foto-avatar.png")} alt="" className="avatar mt-2"/>
                <input className="add-review ps-2 mx-3 mb-2 mt-2" placeholder="Что вы думаете о книге?"></input>
                <button className="btn btn-tertiary btn-addReview px-0">Опубликовать</button>
            </div>
        </div>
    )
}