import { deleteCookie, getObjectCookie, setObjectCookie } from "../function/Cookies";

const { createContext, useState, useContext } = require("react");

const UserContext = createContext()

export const useAuth = () => useContext(UserContext)

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(getObjectCookie('user') === undefined ? null : getObjectCookie('user'))


    const signUp = async ({email, password}) =>{
        return await fetch('http://localhost:5000/user/add', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(resultData => {
                if (resultData.error) {return Promise.reject(resultData.error)}
                logIn({email, password})
                // const userData = resultData.createdUser
                // setUser(userData)
                // setObjectCookie('user', userData, {expires: new Date(2030, 1)})
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }

    const logIn = async ({email, password}) => {
        await fetch(`http://localhost:5000/user/getByEmail/${email}`)
            .then(res => res.json())
            .then(userData =>{
                if (userData.password === password){
                    setUser(userData)
                    setObjectCookie('user', userData, {expires: new Date(2030, 1)})
                } else{
                    return Promise.reject({message: 'Неверный пароль'})
                }
            })
            .catch(() =>{
                return Promise.reject({message: 'Неверный e-mail'})
            })
    }

    const logOut = () =>{
        deleteCookie('user')
        setUser(null)
    }

    const changeUserData = async (data) =>{
        if (user !== null){
           await updateUserData(data)
            .then(() => refreshUserCookie()) 
        } else{
            console.error('Пользователь не авторизловани');
        }
        
    }

    const updateUserData = async (data) =>{
        await fetch('http://localhost:5000/user/update', {
            method: 'POST',
            body: JSON.stringify({...data, _id:user._id}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    const refreshUserCookie = async () =>{
        await fetch(`http://localhost:5000/user/getByID/${user._id}`)
            .then(res => res.json())
            .then(userData =>{
                setUser(userData)
                setObjectCookie('user', userData, {expires: new Date(2030, 1)})
            })
            .catch(err => console.log(err))
    }

    return(
        <UserContext.Provider value={{
            user,
            signUp,
            logIn,
            logOut,
            changeUserData
        }}>
            {children}
        </UserContext.Provider>
    )
}