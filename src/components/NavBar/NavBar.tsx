import React from "react";
import nStyle from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className={nStyle.nav}>
                <div className={nStyle.navItem}>
                    <NavLink to='/profile' activeClassName={nStyle.active}>Profile</NavLink>
                </div>
                <div className={nStyle.navItem}>
                   <NavLink to='/dialogs' activeClassName={nStyle.active}>Messages</NavLink>
                </div>
                <div className={nStyle.navItem}>
                    <NavLink to='/news' activeClassName={nStyle.active}>News</NavLink>
                </div>
                <div className={nStyle.navItem}>
                    <NavLink to='/music' activeClassName={nStyle.active}>Music</NavLink>
                </div>
                <div className={nStyle.navItem}>
                    <NavLink to='/settings' activeClassName={nStyle.active}>Settings</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar