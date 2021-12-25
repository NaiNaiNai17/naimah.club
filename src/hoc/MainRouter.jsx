import React from 'react'
import {BrowserRouter, Routes, Route, Redirect} from 'react-router-dom'
import Header from '../partials/Header'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
const MainRouter = () => {
    return (
       <BrowserRouter>
       <Header/>
       <main>
           <Routes>
              <Route path="/"  exact element={<Projects/>}/> 
              <Route path="/about" element={<About/>}/>
               <Route path="/contact"  element={<Contact/>}/>
           </Routes>
       </main>

       </BrowserRouter>
    )
}

export default MainRouter
