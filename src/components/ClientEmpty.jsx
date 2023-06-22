export const ClientEmpty = ({icon, title,description}) =>{
    return(
        <div className="w-50 mx-auto mt-5">
            <div className="profileOperationHistory-empty m-0">
                <img src={icon} alt="" className="icon-empty"/>
            <p className="h3 text-center mb-1">{title}</p>
                <p className="comment-p mx-auto mb-3">{description}</p>
            </div>
        </div>
    )
}