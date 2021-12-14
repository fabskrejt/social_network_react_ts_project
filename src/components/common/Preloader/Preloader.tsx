import React from "react";
import style from './Preloader.module.css'

export const Preloader = () => {
    return(
        <div className={style.loaderContainer}>
            <p className={style.loadingText} >Loading</p>
        </div>
    )
}