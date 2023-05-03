import React, { useState } from 'react';

const HeaderLinksCTX = React.createContext({

    toggleCart: () => { },
    setOpenLinks: () => { },
    toggleUser: () => { },
    openLinks: false
})

export const HeaderLinksCTXProvider = (props) => {

    const [openLinks, setOpenLinks] = useState("None")

    // toggleCart
    const toggleCart = () => {
        setOpenLinks(prev => {
            return prevChange(prev, "TOGGLE_CART")
        })
    }

    // toggleUserContainer
    const toggleUser = () => {
        setOpenLinks(prev => {
            return prevChange(prev, "TOGGLE_USER")
        })
    }


    // Change Value On Prev
    function prevChange(prev, current) {
        if (prev !== current) { return current }
        else { return "None" }
    }

    return (
        <HeaderLinksCTX.Provider value={{ openLinks, toggleCart, toggleUser }}>
            {props.children}
        </HeaderLinksCTX.Provider>
    )
}


export default HeaderLinksCTX