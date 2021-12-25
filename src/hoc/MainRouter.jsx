import React from 'react'
import {BrowserRouter, Routes, Route, Redirect} from 'react-router-dom'
import Header from '../partials/Header'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
const MainRouter = () => {
    return (
       <BrowserRouter>
       <Header/>
       <main>
           <Routes>
               <Route path="/" exact element={<Home/>}/>
               <Route path="/about"  exact element={<About/>}/>
               <Route path="/contact"  element={<Contact/>}/>
           </Routes>
       </main>

       </BrowserRouter>
    )
}

export default MainRouter
