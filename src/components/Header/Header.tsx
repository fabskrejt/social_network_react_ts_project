import React from "react";
import hStyle from './Header.module.css'

const Header = () => {
    return (
        <header className={hStyle.header}>
            <div>
                <img className={hStyle.headerImg} src='https://www.wallpapertip.com/wmimgs/183-1835364_abstract-logo-transparent-background.jpg'/>
                <span className='header__text'>Social Network</span>
            </div>
        </header>
    )
}

export default Header;