import { useState } from "react"

const Profile = () =>{
    const [selectedProfileListItem, setSelectedProfileListItem] = useState(0)

    const selectProfileListItem = (index) =>{
        const items = document.getElementsByClassName('profile-list-item')
        items[selectedProfileListItem].classList.remove('profile-list-item-selected')
        setSelectedProfileListItem(index)
        items[selectedProfileListItem].classList.add('profile-list-item-selected')
    }

    return(
        <div className="d-flex flex-row">
            <ul className="list-unstyled">
                <li className="profile-list-item profile-list-item-selected" id="profile-list-item-0">Обо мне</li>
                <li className="profile-list-item" id="profile-list-item-1">Рассылка и подписки</li>
                <li className="profile-list-item" id="profile-list-item-2">Моя история операций</li>
                <li className="profile-list-item" id="profile-list-item-3">Моя книжная полка</li>
                <li className="profile-list-item" id="profile-list-item-4">Служба поддержки</li>
                <li className="profile-list-item" id="profile-list-item-5">Выход</li>
            </ul>
        </div>
    )
}