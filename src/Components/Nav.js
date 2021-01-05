import React from "react";
import { Link } from "react-router-dom";

import './Nav.css';
import logo from "../Logo.svg";


function Nav() {
    return (
        <div>
            <nav>
                <i class="material-icons hamburger">menu</i>
                <img className="nav-logo" src={logo} alt="logo" />
                <ul className="nav-menu">
                    <Link className="nav-link" to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className="nav-link" to='/design'>
                        <li>Design</li>
                    </Link>
                    <Link className="nav-link" to='/development'>
                        <li>Development</li>
                    </Link>
                    <Link className="nav-link" to='/about'>
                        <li>About Me</li>
                    </Link>
                </ul>
            </nav>
            {/* <div className="slide-nav">
                <ul className="slide-nav-menu">
                    <li>Home</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>About Me</li>
                </ul>
            </div> */}
        </div>

    );

}

export default Nav;