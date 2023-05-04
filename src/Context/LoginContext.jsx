import React, { useEffect, useState } from 'react';
import { CREATE_NEW_USER_APIKEY, LOGIN_USER_APIKEY } from '../Assets/Assets';


const LoginContext = React.createContext({
    isLogin: "",
    loader: "",
    setIslogin: () => { },
    createAndLoginUser: () => { },
    logoutUser: () => { },
    loginState: () => { },
    setLoadingScreen: () => { },
    loadingScreen: () => { },
})


export const LoginContextProvider = ({ children }) => {

    const [isLogin, setIslogin] = useState(false)
    const [loadingScreen, setLoadingScreen] = useState(true)
    const [loader, setLoader] = useState(false)


    /* -------------------------------------------------------------------------- */
    /*                             FETCH USER ON LOAD                             */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("data"))
        if (userData !== null && userData.idToken !== undefined) {
            controlUserAccess(userData, "ALLOW")
        }
        setLoadingScreen(false)
    }, [])


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
        setLoader(true)
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
            controlUserAccess(data, "ALLOW")

        } catch (error) {
            alert(error)
        }

        setLoader(false)
    }

    /* -------------------------------------------------------------------------- */
    /*                             CONTROL USER ACCESS                            */
    /* -------------------------------------------------------------------------- */
    function controlUserAccess(data, action) {
        if (action === "ALLOW") {
            loginState.idToken = data.idToken
            loginState.userEmail = data.email
            localStorage.setItem("data", JSON.stringify(data))
            setIslogin(true)
        }
        else {
            loginState.idToken = undefined
            loginState.userEmail = undefined
            localStorage.removeItem("data")
            setIslogin(false)
        }

    }

    /* -------------------------------------------------------------------------- */
    /*                                 LOGOUT USER                                */
    /* -------------------------------------------------------------------------- */
    const logoutUser = () => {
        controlUserAccess()
    }





    return (
        <LoginContext.Provider value={{ isLogin, loginState, createAndLoginUser, logoutUser, loadingScreen, loader }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext
