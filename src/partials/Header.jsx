import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar">
            <ul className= "nav-list">
            <li><NavLink to="/about">Me</NavLink></li>
            <li><NavLink to="/">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
