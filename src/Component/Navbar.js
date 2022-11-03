import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <ul className="right">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/employee'>Employee</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;


//class = "active"

//pseudo class