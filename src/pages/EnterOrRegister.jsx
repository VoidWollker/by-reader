import { useState } from "react"
import "../css/EnterOrRegister.css"
import { useAuth } from "../Context/UserContext"
import { useNavigate } from "react-router"

export const EnterOrRegister = () =>{
    const {user, signIn, logIn} = useAuth()
    const [formData, setFormData] = useState({})
    const naviagate = useNavigate()

    const registerUser = async (e) =>{
        e.preventDefault()
        await signIn(formData)
            .then(res => {
                console.log('Its redirect');
                naviagate('/')
            })
            .catch(error => console.log('SignIN error'))
    }

    const enterForm = 
        <form className="d-flex flex-column px-5 py-1">
            <h1 className="d-flex justify-content-center">Войти в профиль</h1>
            <input className="form-control form-control-lg my-2" type="text" placeholder="Логин"/>
            <input className="form-control form-control-lg my-2" type="text" placeholder="Пароль"/>
            <div className="d-flex flex-row justify-content-between">
                <div className="flex-row">
                    <input className="m-1" type="checkbox" name="remember-me" id="" />
                    <label className="m-1" htmlFor="remember-me">Запомнить меня</label>
                </div>
                <button className="btn btn-outline-secondary border-0 text-button">Забыли пароль?</button>
            </div>
            <button className="btn btn-primary px-3 py-3"><h4>Войти</h4></button>
            <button className="btn btn-outline-secondary border-0 text-button">Зарегистрироваться</button>
            <hr />
            <p className="d-flex justify-content-center">Другие способы входа</p>
            <div className="alter-enter d-flex flex-row justify-content-around">

            </div>
        </form>

    const registerForm = 
        <form className="d-flex flex-column px-5 py-1">
            <h1 className="d-flex justify-content-center mt-3">Регистрация</h1>
            <input className="form-control form-control-lg my-2 ms-0" type="text" placeholder="Логин" onChange={(e) => setFormData(prevState => {return {...prevState, email: e.target.value}})}/>
            <input className="form-control form-control-lg my-2 ms-0" type="text" placeholder="Пароль" onChange={(e) => setFormData(prevState => {return {...prevState, password: e.target.value}})}/>
            <input className="form-control form-control-lg my-2 ms-0" type="text" placeholder="Повтор пароля"/>
            <button className="btn btn-primary my-1 px-3 py-3 btn-registration" onClick={(e) => registerUser(e)}><h4>Зарегистрироваться</h4></button>
            <button className="btn btn-outline-secondary border-0 text-button btn-log-in">Войти в профиль</button>
        </form>

    return(
        <div className="d-flex justify-content-center">
            {user === null ?
                registerForm :
                enterForm}
        </div>
    )
}