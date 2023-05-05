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
            <p className="h2"></p>
            <div className="d-flex flex-row">
                <img src="" alt="" />
                <button className="btn btn-quaternary"></button>
            </div>
            <div className="d-flex-flex-row">
                <input type="text" placeholder="Фамилия"/>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Отчество"/>
            </div>
            <div className="d-flex-flex-row">
                <input type="text" placeholder="Дата рождения"/>
                <input type="text" placeholder="Псевдоним"/>
            </div>
            <div className="d-flex-flex-row">
                <input type="checkbox" name="openInfo" id="openInfo" />
                <label htmlFor="openInfo">Открыть информацию</label>
            </div>
            <p>Пользователи Почитателя увидят ваше фото и имя<br/>Личные данные защищены политикой конфиденциальности</p>
            <button className="btn btn-primary">Сохранить изменения</button>

            <p className="h2">Информация для входа</p>
            <p>Электронная почта, номер телефона и социальные сети нужны для входа на сайт и восстановления пароля.</p>
            <div className="d-flex flex-row">
                <input type="text" placeholder="Email"/>
                <button className="btn btn-quaternary">Изменить эл. почту</button>
            </div>
            <p>Для восстановления доступа и писем</p>
            <div className="d-flex flex-row">
                <input type="text" placeholder="+7"/>
                <button className="btn btn-quaternary">Добавить телефон</button>
            </div>
            <p>Для входа и сообщений</p>
            <input type="text" placeholder="Введите текущий пароль"/>
            <div className="d-flex flex-row">
                <input type="text" placeholder="Новый пароль"/>
                <button className="btn btn-quaternary">Изменить пароль</button>
            </div>
            <input type="text" placeholder="Повторите пароль"/>

            <p className="h3">Социальные сети</p>
            <p>Подключайте социальные сети для лёгкого входа на сайт Почитатель</p>
        </>
    )
}