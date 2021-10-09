import React from "react";
import headerStyle from './Header.module.css'

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div>
                <img className="header__img" src=''/>
                <span className='header__text'>Social Network</span>
            </div>
        </header>
    )
}

export default Header;