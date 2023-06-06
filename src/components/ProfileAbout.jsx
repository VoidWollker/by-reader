import { useState } from 'react'
import { useAuth } from '../context/UserContext'

import "../css/ProfileAbout.css"

export const ProfileAbout = () =>{
    const { user, changeData } = useAuth()
    const [userData, setUserData] = useState(user)

    const validations = {
        name: /^[A-Za-zА-Яа-я-_']*$/,
        lastname: /^[A-Za-zА-Яа-я-_']*$/,
        patronymic: /^[A-Za-zА-Яа-я-_']*$/,
        username: /^[A-Za-zА-Яа-я]+\w*/,
        email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        phone: /^[\d+]*\d*$/
    }

    const changePersonData = async () =>{
        await changeData({
            _id: userData._id,
            name: userData.name,
            lastname: userData.lastname,
            patronymic: userData.patronymic
        })
    }

    const createSocialLink = (title, image, status) =>{
        return(
            <div className="d-flex flex-row">
                <img src="" alt="" />
                <div className="d-flex flex-column">
                    <p className="h4">{title}</p>
                    {status === true ?
                        <p className="h5"></p>:
                        <p className="h5">Не подключено</p>
                    }
                </div>
                <input type="checkbox" name="" id="" value={status}/>
            </div>
        )
    }

    return(
            <div className="d-flex flex-column profile-p ms-5">
                <p className="h2">Обо мне</p>
                <div className="d-flex flex-row my-3">
                    <img src={require("../assets/icons/profile-avatar.png")} alt="" className="profile-avatar me-3 "/>
                    <input type="file" className="btn btn-quaternary btns-changes my-auto py-2"/>
                </div>
                <div className="d-flex flex-row profile-input flex-wrap">
                    <input type="text" placeholder="Фамилия" className="me-3" value={userData.lastname}
                        onChange={e => validations.lastname.test(e.target.value) ? 
                            setUserData({...userData, lastname: e.target.value}) :
                            e.target.value = userData.lastname
                        }/>
                    <input type="text" placeholder="Имя" className="me-3" value={userData.name}
                        onChange={e => validations.name.test(e.target.value) ?
                            setUserData({...userData, name: e.target.value}) :
                            e.target.value = userData.name    
                        }/>
                    <input type="text" placeholder="Отчество" value={userData.patronymic}
                        onChange={e => validations.patronymic.test(e.target.value) ?
                            setUserData({...userData, patronymic: e.target.value}) :
                            e.target.value = userData.patronymic
                        }/>
                </div>
                <div className="d-flex flex-row profile-input flex-wrap">
                    <input type="date" placeholder="Дата рождения" mask className="me-3" value={userData.birthDate}
                        onChange={e => setUserData({...userData, birthDate: e.target.value})}/>
                    <div className="d-flex flex-column">
                        <input type="text" placeholder="Псевдоним" className="profile-anonymous" value={userData.username}
                            onChange={e => validations.username.test(e.target.value) || e.target.value === '' ?
                                setUserData({...userData, username: e.target.value}) :
                                e.target.value = userData.username
                        }/>
                        <p className="ps-2 mb-2">Выводится вместо имени</p>
                    </div>
                </div>
                <div className="d-flex flex-row profile-checkbox">
                    <input type="checkbox" name="openInfo" id="openInfo" />
                    <div className="d-flex flex-column">
                        <label className="ps-1" htmlFor="openInfo">Открыть информацию</label>
                        <p className="ps-1">Пользователи Почитателя увидят ваше фото и имя<br/>Личные данные защищены <b>политикой конфиденциальности</b></p>
                    </div>
                </div>
                <button onClick={changePersonData} className="btn btn-primary btn-profile-save my-3">Сохранить изменения</button>

                <p className="h2 mt-4">Информация для входа</p>
                <p className="profile-text-limiter my-2">Электронная почта, номер телефона и социальные сети нужны для входа на сайт и восстановления пароля.</p>
                <div className="d-flex flex-row profile-input flex-wrap">
                    <input type="email" placeholder="Email"/>
                    <button className="btn btn-quaternary btns-changes mt-1 ms-3">Изменить эл. почту</button>
                </div>
                <p>Для восстановления доступа и писем</p>
                <div className="d-flex flex-row profile-input flex-wrap">
                    <input type="tel" placeholder="+7" value={userData.phone}
                        onChange={e => validations.phone.test(e.target.value) ?
                            setUserData({...userData, phone: e.target.value}) :
                            e.target.value = userData.phone
                    }/>
                    <button className="btn btn-quaternary btns-changes mt-1 ms-3">Добавить телефон</button>
                </div>
                <div className="profile-input">
                    <p className="mb-3">Для входа и сообщений</p>
                    <div className="d-flex flex-row flex-wrap">
                        <div className="d-flex flex-column profile-input">
                            <input type="password" placeholder="Введите текущий пароль"/>
                            <input type="password" placeholder="Новый пароль"/>
                            <input type="password" placeholder="Повторите пароль"/>
                        </div>
                        <button className="btn btn-quaternary btns-changes ms-3 my-auto py-2">Изменить пароль</button>
                    </div>
                </div>
                <p className="h3 mt-4">Социальные сети</p>
                <p className="my-2">Подключайте социальные сети для лёгкого входа на сайт Почитатель</p>
            </div>
    )
}