import React from "react";
import {NavLink} from "react-router-dom";
import dStyle from './Dialogs.module.css'


type PropsOfDialogItem = {
    name: string
    id: number
}
const DialogItem = (props: PropsOfDialogItem) => {
    return (
        <div className={dStyle.usersItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type PropsOfMessage = {
    message: string
    id: number
}
const Message = (props: PropsOfMessage) => {
    return (
        <div className={dStyle.dialogsItem}> {props.message}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Rusik'},
        {id: 2, name: 'Toshik'},
        {id: 3, name: 'Vovchick'},
        {id: 4, name: 'Dimas'},
        {id: 5, name: 'Kisli'},
    ]

    let messages = [
        {id: 1, textMessage: 'Message 1'},
        {id: 2, textMessage: 'Message 2'},
        {id: 3, textMessage: 'Message 3'},
        {id: 4, textMessage: 'Message 4'},
        {id: 5, textMessage: 'Message 5'},
        {id: 6, textMessage: 'Message 6'},
    ]

    let dialogsElement = dialogsData.map(i => <DialogItem name={i.name} id={i.id}/>)
    let messagesElement = messages.map(i => <Message id={i.id} message={i.textMessage}/>)
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