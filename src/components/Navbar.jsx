import React from 'react'
import { NavLink } from 'react-router-dom'
import "./css/Navbar.css"

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Signup</NavLink>
        </nav>
    )
}

export default Navbar
