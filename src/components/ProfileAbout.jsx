import "../css/ProfileAbout.css"

export const ProfileAbout = () =>{

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
        <>
            <div className="d-flex flex-column profile-p ms-4">
                <p className="h2">Обо мне</p>
                <div className="d-flex flex-row my-3">
                    <img src={require("../assets/icons/profile-avatar.png")} alt="" className="profile-avatar me-3 "/>
                    <button className="btn btn-quaternary btns-changes my-auto py-2">Загрузить аватар</button>
                </div>
                <div className="d-flex flex-row profile-input flex-wrap">
                    <input type="text" placeholder="Фамилия" className="me-3"/>
                    <input type="text" placeholder="Имя" className="me-3"/>
                    <input type="text" placeholder="Отчество"/>
                </div>
                <div className="d-flex flex-row profile-input flex-wrap">
                    <input type="text" placeholder="Дата рождения" className="me-3"/>
                    <div className="d-flex flex-column">
                        <input type="text" placeholder="Псевдоним" className="profile-anonymous"/>
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
                <button className="btn btn-primary btn-profile-save my-3">Сохранить изменения</button>

                <p className="h2 mt-4">Информация для входа</p>
                <p className="profile-text-limiter my-2">Электронная почта, номер телефона и социальные сети нужны для входа на сайт и восстановления пароля.</p>
                <div className="d-flex flex-row profile-input flex-wrap">
                    <input type="text" placeholder="Email"/>
                    <button className="btn btn-quaternary btns-changes mt-1 ms-3">Изменить эл. почту</button>
                </div>
                <p>Для восстановления доступа и писем</p>
                <div className="d-flex flex-row profile-input flex-wrap">
                    <input type="text" placeholder="+7"/>
                    <button className="btn btn-quaternary btns-changes mt-1 ms-3">Добавить телефон</button>
                </div>
                <div className="profile-input">
                    <p className="mb-3">Для входа и сообщений</p>
                    <div className="d-flex flex-row flex-wrap">
                        <div className="d-flex flex-column profile-input">
                            <input type="text" placeholder="Введите текущий пароль"/>
                            <input type="text" placeholder="Новый пароль"/>
                            <input type="text" placeholder="Повторите пароль"/>
                        </div>
                        <button className="btn btn-quaternary btns-changes ms-3 my-auto py-2">Изменить пароль</button>
                    </div>
                </div>
                <p className="h3 mt-4">Социальные сети</p>
                <p className="my-2">Подключайте социальные сети для лёгкого входа на сайт Почитатель</p>
            </div>
        </>
    )
}