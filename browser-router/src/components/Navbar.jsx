import React from 'react'
import navStyle from "./navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id={navStyle.navContainer}>
            {/* <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact-us"> Contact us</a></li>
                <li><a href="/create-user">Create User</a></li>
                <li><a href="/all-user">ALl User</a></li>
            </ul> */}

            {/* Cannot use Anchor tag bcz it refresh page at every input  */}
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact-us"> Contact us</Link></li>
                <li><Link to="/create-user">Create User</Link></li>
                <li><Link to="/all-user">ALl User</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar