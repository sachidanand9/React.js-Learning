import React from 'react'
import Navbar from './components/Navbar';
import "./global.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from"./components/home/Home";
import Careers from"./components/careers/Careers";
import About from"./components/about/About";
import Contact from"./components/contact/Contact";
import CreateUser from"./components/createUser/CreateUser";
import AllUser from"./components/allUser/AllUser";
import EditUser from './components/editUser/EditUser';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Toaster/>
 
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/careers" element={<Careers/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact-us" element={<Contact/>}></Route>
            <Route path="/create-user" element={<CreateUser/>}></Route>
            <Route path="/all-user" element={<AllUser/>}></Route>
            <Route path='/edit/:id' element ={<EditUser/>}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App