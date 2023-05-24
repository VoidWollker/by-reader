import { getObjectCookie, setObjectCookie } from "../Function/Cookies";

const { createContext, useState, useContext } = require("react");

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(getObjectCookie('user') === undefined ? null : getObjectCookie('user'))


    const signIn = async ({email, password}) =>{
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
            .then(userData => {
                console.log(userData);
                setObjectCookie('user', {id: userData._id, email: userData.email}, {expires: new Date(2030, 1)})
            })
            .catch(error => {
                console.log(error.message)
                return Promise.reject(error)
            })
    }

    const logIn = ({email, password}) => {
        
    }

    const logOut = () =>{
        setUser(null)
    }

    return(
        <UserContext.Provider value={{
            user,
            signIn,
            logIn,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}