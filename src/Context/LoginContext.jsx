import React, { useState } from 'react';
import { CREATE_NEW_USER_APIKEY, LOGIN_USER_APIKEY } from '../Assets/Assets';


const LoginContext = React.createContext({
    isLogin: "",
    setIslogin: () => { },
    createAndLoginUser: () => { },
    loginState: () => { }
})


export const LoginContextProvider = ({ children }) => {

    const [isLogin, setIslogin] = useState(false)


    const loginState = {
        isLogin: false,
        userEmail: undefined,
        idToken: undefined,
        userName: undefined,
        userPhone: undefined
    }

    /* -------------------------------------------------------------------------- */
    /*                             CREATE & LOGIN USER                            */
    /* -------------------------------------------------------------------------- */

    const createAndLoginUser = async (email, password, action) => {
        try {
            const response = await fetch(action === "CREATE_NEW_USER" ? CREATE_NEW_USER_APIKEY : LOGIN_USER_APIKEY, {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: { "Content-Type": "application/json" }
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error.message)
            }
            console.log(data);

        } catch (error) {
            console.log(error);
            alert(error)
        }
    }




    return (
        <LoginContext.Provider value={{ isLogin, setIslogin, loginState, createAndLoginUser }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext
