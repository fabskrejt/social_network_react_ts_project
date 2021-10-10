import React from "react";
import nStyle from './NavBar.module.css'
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className={nStyle.nav}>
                <div className={nStyle.navItem}>
                    <Link to='/profile'>Profile</Link>
                </div>
                <div className={nStyle.navItem}>
                   <Link to='/dialogs'>Messages</Link>
                </div>
                <div className={nStyle.navItem}>
                    <Link to='/news'>News</Link>
                </div>
                <div className={nStyle.navItem}>
                    <Link to='/music'>Music</Link>
                </div>
                <div className={nStyle.navItem}>
                    <Link to='/settings'>Settings</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar