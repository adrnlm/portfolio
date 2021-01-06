import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import './Nav.css';
import logo from "../Logo.svg";



function Nav() {

    const [sidebarToggle, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebarToggle)

    return (
        <div>
            <nav>
                <NavLink className="sidebar-toggle" to="#">
                    <i className="material-icons hamburger" onClick={showSidebar}>menu</i>
                </NavLink>
                <img className="nav-logo" src={logo} alt="logo" />
                <ul className="nav-menu">
                    <NavLink className="nav-link " to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink className="nav-link" to='/design'>
                        <li>Design</li>
                    </NavLink>
                    <NavLink className="nav-link" to='/development'>
                        <li>Development</li>
                    </NavLink>
                    <NavLink className="nav-link" to='/about'>
                        <li>About Me</li>
                    </NavLink>
                </ul>
            </nav>

            <div className={sidebarToggle ? 'grey-background active' : 'grey-background'} onClick={showSidebar}></div>

            <div className={sidebarToggle ? 'sidebar active' : 'sidebar'}>
                <div className="sideHead">
                    <img className="sidebar-logo" src={logo} alt="logo" />
                </div> 
                <ul className="sidebar-menu">
                    <NavLink exact className="nav-link sidenav" to='/' onClick={showSidebar} activeClassName="current">
                        <li>Home</li>
                    </NavLink>
                    <NavLink exact className="nav-link sidenav" to='/design' onClick={showSidebar} activeClassName="current">
                        <li>Design</li>
                    </NavLink>
                    <NavLink exact className="nav-link sidenav" to='/development' onClick={showSidebar} activeClassName="current">
                        <li>Development</li>
                    </NavLink>
                    <NavLink exact className="nav-link sidenav" to='/about' onClick={showSidebar} activeClassName="current">
                        <li>About Me</li>
                    </NavLink>
                </ul>
            </div>
        </div>

    );

}

export default Nav;