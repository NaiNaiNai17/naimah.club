import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul className= "nav-list">
                <li><NavLink to="/">Here</NavLink></li>
                <li><NavLink to="/about">About & Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
