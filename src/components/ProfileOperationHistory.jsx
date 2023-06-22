import "../css/ProfileOperationHistory.css"
import { ClientEmpty }from "../components/ClientEmpty"
import { useNavigate } from "react-router"

export const ProfileOperationHistory = () =>{
    const naviagte = useNavigate()

    const createCheck = (id, date, status, products, sum) =>{
        return(
            <div className="ProfileOperationHistory-order ms-5 mt-4">
                <p className="h2 mb-3">История операций</p>
                <div className="d-flex flex-row ProfileOperationHistory-order-data">
                    <p className="h3 my-3 ms-3 order-id-data">Покупка №{id} от {date}</p>
                    <p className="h3 text-right my-3 me-2">{status}</p>
                </div>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-row">
                        {products.map(product =>{
                            return(
                                <img src="" alt="" className="fotoBook-order m-3"/>
                            )
                        })}
                    </div>
                    <p className="h3 text-right me-3 my-auto price-order">{sum} Р</p>
                </div>
            </div>
        )
    }

    return(
        <div className="w-75">
            <ClientEmpty
                    icon={require("../assets/icons/profileOperationHistory-empty.png")}
                    title={'Здесь будет отображаться история покупок'}
                    description={'Здесь будут храниться книги, которые вы купили на нашем сайте'}            
            />
            <button className="btn btn-primary btn-add-books" onClick={() => naviagte('/', {replace: true})}>Выбрать книги</button>
        </div>
    )
}