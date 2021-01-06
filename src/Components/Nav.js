import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Nav.css';
import logo from "../Logo.svg";



function Nav() {

    const [sidebarToggle, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebarToggle)

    return (
        <div>
            <nav>
                <Link className="sidebar-toggle" to="#">
                    <i className="material-icons hamburger" onClick={showSidebar}>menu</i>
                </Link>
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
            <div className="grey-background"></div>
            <div className={sidebarToggle ? 'sidebar active' : 'sidebar'}>
                <img className="sidebar-logo" src={logo} alt="logo" />
                <ul className="sidebar-menu">
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
            </div>
        </div>

    );

}

export default Nav;