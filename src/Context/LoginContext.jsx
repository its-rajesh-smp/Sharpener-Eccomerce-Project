import React, { useState } from 'react';

const LoginContext = React.createContext({
    isLogin: "",
    setIslogin: () => { },
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






    return (
        <LoginContext.Provider value={{ isLogin, setIslogin, loginState }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext
