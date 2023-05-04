import React, { useEffect, useState } from 'react';
import { CREATE_NEW_USER_APIKEY, LOGIN_USER_APIKEY } from '../Assets/Assets';



const LoginContext = React.createContext({
    loader: "",
    createAndLoginUser: () => { },
    logoutUser: () => { },
    loginState: () => { },
    loadingScreen: "",
})


export const LoginContextProvider = ({ children }) => {

    const [loginState, setLoginState] = useState({
        isLogin: false,
        userEmail: undefined,
        idToken: undefined,
        userName: undefined,
        userPhone: undefined,
        cartData: []
    })


    const [loadingScreen, setLoadingScreen] = useState(true)
    const [loader, setLoader] = useState(false)


    console.log("%cRENDER LOGIN CTX", "color:red");

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
            alert(error);
            console.log(error);
        }

        setLoader(false)
    }

    /* -------------------------------------------------------------------------- */
    /*                             CONTROL USER ACCESS                            */
    /* -------------------------------------------------------------------------- */
    function controlUserAccess(data, action) {
        if (action === "ALLOW") {
            localStorage.setItem("data", JSON.stringify(data))
            setLoginState({
                isLogin: true,
                userEmail: data.email,
                idToken: data.idToken,
                userName: undefined,
                userPhone: undefined,
                cartData: []
            })
        }
        else {
            localStorage.removeItem("data")
            setLoginState({
                isLogin: false,
                userEmail: undefined,
                idToken: undefined,
                userName: undefined,
                userPhone: undefined,
                cartData: []
            })
        }

    }

    /* -------------------------------------------------------------------------- */
    /*                                 LOGOUT USER                                */
    /* -------------------------------------------------------------------------- */
    const logoutUser = () => {
        controlUserAccess()
    }





    return (
        <LoginContext.Provider value={{ loginState, createAndLoginUser, logoutUser, loadingScreen, loader }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext
