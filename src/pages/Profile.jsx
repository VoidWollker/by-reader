import { useState, useEffect } from "react"
import { useAuth } from "../Context/UserContext"
import { useNavigate } from "react-router"
import { ProfileAbout } from "../components/ProfileAbout"
import { ProfileOperationHistory } from "../components/ProfileOperationHistory"
import { ProfileSubscribtions } from "../components/ProfileSubscribtions"

import "../css/Profile.css"

export const Profile = ({selectedIndex}) =>{
    const [selectedProfileListItem, setSelectedProfileListItem] = useState(selectedIndex)
    const {user} = useAuth()
    const navigate = useNavigate()

    useEffect(() =>{
        if (!user){
            navigate('/enter')
        }
    }, [user, navigate])

    const selectProfileListItem = (index) =>{
        const items = document.getElementsByClassName('profile-list-item')
        items[selectedProfileListItem].classList.remove('profile-list-item-selected')
        setSelectedProfileListItem(index)
        items[selectedProfileListItem].classList.add('profile-list-item-selected')
    }

    return(
        <div className="d-flex flex-row w-75 mx-auto py-4">
            <div className="d-flex flex-row ">

                <ul className="list-unstyled">
                    <li className="profile-list-item profile-list-item-selected" id="profile-list-item-0"><img src={require("../assets/icons/profile-about.png")} alt="" className="me-2"/>Обо мне</li>
                    <li className="profile-list-item" id="profile-list-item-1"><img src={require("../assets/icons/profile-subscribtions.png")} alt="" className="me-2"/>Рассылка и подписки</li>
                    <li className="profile-list-item" id="profile-list-item-2"><img src={require("../assets/icons/profile-operatio-history.png")} alt="" className="me-2"/>История операций</li>
                    <li className="profile-list-item" id="profile-list-item-3"><img src={require("../assets/icons/profile-bookshelf.png")} alt="" className="me-2"/>Книжная полка</li>
                    <li className="profile-list-item pb-5" id="profile-list-item-4"><img src={require("../assets/icons/profile-support-service.png")} alt="" className="me-2"/>Служба поддержки</li>
                    <li className="profile-list-item" id="profile-list-item-5"><img src={require("../assets/icons/profile-exit.png")} alt="" className="me-2"/>Выход</li>
                </ul>
            </div>
            {/* <ProfileAbout/> */}
            {/* <ProfileOperationHistory/> */}
            <ProfileSubscribtions/>

        </div>
    )
}