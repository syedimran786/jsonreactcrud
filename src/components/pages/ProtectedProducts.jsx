import React, { useContext } from 'react'
import { AuthContext } from '../Authentication'
import { Navigate } from 'react-router-dom';

function ProtectedProducts({ children }) {
    let { isloggin } = useContext(AuthContext);
    console.log(children)
    console.log(isloggin)
    if (isloggin) {
        return <>
            {children}
        </>
    }
    else {
        return <Navigate to="/login" />
    }

}

export default ProtectedProducts
