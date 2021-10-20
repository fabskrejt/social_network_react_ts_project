import React from "react";
import dStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {AppPropsType} from "../../App";

const Dialogs = (props: AppPropsType) => {

    let dialogsElement = props.dialogsData.map(i => <DialogItem name={i.name} id={i.id}/>)
    let messagesElement = props.messages.map(i => <Message id={i.id} message={i.textMessage}/>)
    return (
        <div className={dStyle.dialogPage}>
            <div className={dStyle.users}>
                {dialogsElement}
            </div>
            <div className={dStyle.dialogs}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs