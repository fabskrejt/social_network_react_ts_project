import React from "react";
import hStyle from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={hStyle.header}>
            <div>
                <img className={hStyle.headerImg}
                     src='https://www.wallpapertip.com/wmimgs/183-1835364_abstract-logo-transparent-background.jpg'/>
                <span className='header__text'>Social Network</span>
            </div>
            {
                props.isAuth
                    ? <div>
                        <div> {props.login}</div>
                        <div className={hStyle.login} onClick={props.logout}> logout</div>
                    </div>
                    : <div><NavLink to={'/login'}>Login</NavLink></div>
            }
        </header>
    )
}

export default Header;