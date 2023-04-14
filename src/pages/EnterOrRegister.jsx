export const EnterOrRegister = () =>{
    const enterForm = 
        <form className="d-flex flex-column p-5">
            <h1 className="d-flex justify-content-center">Войти в профиль</h1>
            <input type="text" placeholder="Логин"/>
            <input type="text" placeholder="Пароль"/>
            <div className="d-flex flex-row justify-content-around">
                <div className="flex-row">
                    <input className="m-1" type="checkbox" name="remember-me" id="" />
                    <label className="m-1" htmlFor="remember-me">Запомнить меня</label>
                </div>
                <button>Забыли пароль?</button>
            </div>
            <button>Войти</button>
            <button>Зарегистрироваться</button>
            <hr />
            <p className="d-flex justify-content-center">Другие способы входа</p>
            <div className="alter-enter d-flex flex-row justify-content-around">

            </div>
        </form>

    const registerForm = 
        <form className="d-flex flex-column p-5">
            <h1 className="d-flex justify-content-center">Регистрация</h1>
            <input type="text" placeholder="Логин"/>
            <input type="text" placeholder="Пароль"/>
            <input type="text" placeholder="Повтор пароля"/>
            <button className="m-1">Зарегестрироваться</button>
            <button>Войти в профиль</button>
        </form>

    return(
        <>
            {registerForm}
        </>
    )
}