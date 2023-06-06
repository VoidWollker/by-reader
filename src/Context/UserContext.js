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
                const userData = resultData.createdUser
                setUser({id: userData._id, email: userData.email})
                setObjectCookie('user', {id: userData._id, email: userData.email}, {expires: new Date(2030, 1)})
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }

    const logIn = async ({email, password}) => {
        await fetch(`http://localhost:5000/user/getByEmail/${email}`)
            .then(res =>{
                return res.json()
            })
            .then(userData =>{
                if (userData.password === password){
                    setUser({_id: userData._id, email: userData.email})
                    setObjectCookie('user', {id: userData._id, email: userData.email}, {expires: new Date(2030, 1)})
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

    return(
        <UserContext.Provider value={{
            user,
            signUp,
            logIn,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}