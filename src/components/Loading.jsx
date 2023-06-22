import "../css/Loading.css"

export const Loading = () =>{
    return(
        <div className='d-flex flex-row loading'>
                    <img src={require("../assets/icons/loading.png")} alt="" className="foto-loading me-2" />
                    <p>Загрузка . . .</p>
        </div>

    )
}