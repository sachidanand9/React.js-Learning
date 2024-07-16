import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/Update'
import Read from './Components/Read'
// import { BrowserRouter } from 'react-router-dom'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    
     <BrowserRouter>
     <Routes>
      <Route path ='/' Element={<Home/>}></Route>
      <Route path ='/create' Element={<Create/>}></Route>
      <Route path ='/update' Element={<Update/>}></Route>
      <Route path ='/read' Element={<Read/>}></Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App