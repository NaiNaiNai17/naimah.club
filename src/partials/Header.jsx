import {React, useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'


//  const toggle = () =>{
//     const element = document.body;
//     element.classlist.add('light')
//     element.classList.toggle('dark')
//     console.log('Toggled')
// }

const Header = () => {
   

    return (
        <div className="navbar">
            <ul className= "nav-list">
            <li><NavLink to="/about">Me</NavLink></li>
            <li><NavLink to="/">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
            </ul>
            {/* <button onClick={toggle}>lightDark</button> */}
        </div>
    )
}

export default Header
