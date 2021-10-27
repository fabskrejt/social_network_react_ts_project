import dStyle from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsOfDialogItem = {
    name: string
    id: string
}
const DialogItem = (props: PropsOfDialogItem) => {
    return (
        <div className={dStyle.usersItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem