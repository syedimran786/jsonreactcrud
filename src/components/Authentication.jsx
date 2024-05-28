import React, { createContext, useState } from 'react'

export let AuthContext = createContext()

function Authentication({ children}) {
    let [isloggin, setisloggin] = useState(null)

    let login = (data) => {
        setisloggin(data)
    }

    let logout = () => {
        setisloggin(null)
    }

    return (
        <AuthContext.Provider value={{ isloggin, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export default Authentication
