import React from "react";
import {NavLink} from "react-router-dom";
import dStyle from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={dStyle.dialogPage}>
            <div className={dStyle.users}>
                <div className={dStyle.usersItem}>
                    <NavLink to='/dialogs/1'>Rusik</NavLink>
                </div>
                <div className={dStyle.usersItem}>
                    <NavLink to='/dialogs/2'>Toshik</NavLink>
                </div>
                <div className={dStyle.usersItem}>
                    <NavLink to='/dialogs/3'>Vovchick</NavLink>
                </div>
                <div className={dStyle.usersItem}>
                    <NavLink to='/dialogs/4'>Dimas</NavLink>
                </div>
                <div className={dStyle.usersItem}>
                    <NavLink to='/dialogs/5'>Kisli</NavLink>
                </div>

            </div>
            <div className={dStyle.dialogs}>
                <div className={dStyle.dialogsItem}> Message 1</div>
                <div className={dStyle.dialogsItem}> Message 2</div>
                <div className={dStyle.dialogsItem}> Message 3</div>
                <div className={dStyle.dialogsItem}> Message 4</div>
                <div className={dStyle.dialogsItem}> Message 5</div>

            </div>
        </div>
    )
}

export default Dialogs