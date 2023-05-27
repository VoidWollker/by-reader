import { useState } from "react"
import "../css/EnterOrRegister.css"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router"

export const EnterOrRegister = () =>{
    const {signUp, logIn} = useAuth()
    const [formData, setFormData] = useState({email: '', password: '', doubledPassword: ''})
    const [formSelecter, setFormSelecter] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()

    const registerUser = async (e) =>{
        e.preventDefault()
        if (!inputsFilled()){
            console.log('Не все поля заполнены');
            setErrorMessage('Не все поля заполнены')
            return
        }

        if (!checkEmail()){
            setErrorMessage('Некорректный Email')
            clearEmailInputs()
            return
        }

        if (!checkDoubledPasword()){
            setErrorMessage('Пароли не совпадают')
            clearPasswordInputs()
            return
        }

        await signUp(formData)
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                if (error.code === 11000){
                    setErrorMessage('E-mail уже используется')
                }
            })
    }

    const inputsFilled = () => formData.email && formData.password && formData.doubledPassword
    const checkDoubledPasword = () => formData.password === formData.doubledPassword
    const checkEmail = () => (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email))

    const clearAllInputs = () =>{
        clearEmailInputs()
        clearPasswordInputs()
    }

    const clearEmailInputs = () =>{
        document.querySelectorAll('input[placeholder=E-mail]')
            .forEach(passInput => passInput.value = '')
    }

    const clearPasswordInputs = () =>{
        document.querySelectorAll('input[type=password]')
            .forEach(passInput => passInput.value = '')
    }

    const enterForm = 
        <form className="d-flex flex-column px-5 py-1">
            <h1 className="d-flex justify-content-center mt-3">Войти в профиль</h1>
            <input className="form-control form-control-lg my-2" type="text" placeholder="E-mail"/>
            <input className="form-control form-control-lg my-2" type="password" placeholder="Пароль"/>
            <div className="d-flex flex-row justify-content-between">
                <div className="flex-row">
                    <input className="m-1" type="checkbox" name="remember-me" id="" />
                    <label className="m-1" htmlFor="remember-me">Запомнить меня</label>
                </div>
                <button className="btn btn-outline-secondary border-0 text-button">Забыли пароль?</button>
            </div>
            <button className="btn btn-primary px-3 pt-3"><h4>Войти</h4></button>
            <button className="btn btn-outline-secondary border-0 text-button" 
                onClick={(e) => {
                    e.preventDefault()
                    setFormSelecter(1)
                    clearAllInputs()
                }}>Зарегистрироваться</button>
            <hr />
            <p className="d-flex justify-content-center">Другие способы входа</p>
            <div className="alter-enter d-flex flex-row justify-content-around">

            </div>
        </form>

    const registerForm = 
        <form className="d-flex flex-column px-5 py-1">
            <h1 className="d-flex justify-content-center mt-3">Регистрация</h1>
            <input className="form-control form-control-lg my-2 ms-0" type="text" placeholder="E-mail" 
                onChange={(e) => setFormData(prevState => {return {...prevState, email: e.target.value}})}/>
            <input className="form-control form-control-lg my-2 ms-0" type="password" placeholder="Пароль"
                onChange={(e) => setFormData(prevState => {return {...prevState, password: e.target.value}})}/>
            <input className="form-control form-control-lg my-2 ms-0" type="password" placeholder="Повтор пароля"
                onChange={(e) => setFormData(prevState => {return {...prevState, doubledPassword: e.target.value}})}/>
            {errorMessage !== null ? <p className="alert alert-danger my-2 ms-0">{errorMessage}</p> : null}
            <button className="btn btn-primary my-1 px-3 py-3 btn-registration" onClick={(e) => registerUser(e)}><h4>Зарегистрироваться</h4></button>
            <button className="btn btn-outline-secondary border-0 text-button btn-log-in" 
                onClick={(e) => {
                    e.preventDefault() 
                    setFormSelecter(0)
                    clearAllInputs()
                }}>Войти в профиль</button>
        </form>

    return(
        <div className="d-flex justify-content-center">
            {formSelecter === 0 ?
                enterForm :
                registerForm}
        </div>
    )
}