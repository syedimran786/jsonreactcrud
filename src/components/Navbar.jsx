import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./css/Navbar.css"
import ButtonComponent from './ButtonComponent'
import { AuthContext } from './Authentication'

function Navbar() {

    let { isloggin, logout } = useContext(AuthContext)
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/images">Images</NavLink>

            {!isloggin && <NavLink to="/login">Login</NavLink>}

            {!isloggin && <NavLink to="/register">Signup</NavLink>}

            {isloggin && <ButtonComponent classname="delete-message" onclick={() => { logout() }}>Logout</ButtonComponent>}

        </nav>
    )
}

export default Navbar
