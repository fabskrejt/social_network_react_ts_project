import React from "react";
import navStyle from './NavBar.module.css'


const NavBar = () => {
    return (
        <div>
            <nav className={navStyle.nav}>
                <div className='nav__item'>
                    Profile
                </div>
                <div className='nav__item'>
                    Messages
                </div>
                <div className='nav__item'>
                    News
                </div>
                <div className='nav__item'>
                    Music
                </div>
                <div className='nav__item'>
                    Settings
                </div>
            </nav>
        </div>
    )
}

export default NavBar