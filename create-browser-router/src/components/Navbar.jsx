import React from 'react'
import { Fragment } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Navbar = () => {
let navigate = useNavigate()
 let Token = localStorage.getItem("token")
 console.log(Token);

 let logout =()=>{
  localStorage.clear();
  navigate("/login")
 }
  return (
    <nav>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/careers">Careers</Link></li>
            <li> <Link to="/about">About</Link></li>
            {Token ? (
            <li onClick={logout}>Logout</li>) : (
              <Fragment>

                <li> <Link to="/register">Register</Link></li>
                <li> <Link to="/login">Login</Link></li>
              </Fragment>
            )}

        </ul>
    </nav>
  )
}

export default Navbar