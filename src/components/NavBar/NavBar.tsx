import React from "react";
import nStyle from './NavBar.module.css'


const NavBar = () => {
    return (
        <div>
            <nav className={nStyle.nav}>
                <div className={nStyle.navItem}>
                    Profile
                </div>
                <div className={nStyle.navItem}>
                    Messages
                </div>
                <div className={nStyle.navItem}>
                    News
                </div>
                <div className={nStyle.navItem}>
                    Music
                </div>
                <div className={nStyle.navItem}>
                    Settings
                </div>
            </nav>
        </div>
    )
}

export default NavBar