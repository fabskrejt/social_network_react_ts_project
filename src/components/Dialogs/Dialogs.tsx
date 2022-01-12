import React, {ChangeEvent, useState} from "react";
import dStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
/*import {ActionTypes, MessagesPageType} from "../../redux/state";*/
import {Button} from "../Button/Button";
import {MessagesPageType} from "../../redux/dialog-reducer";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    dialogsPage: MessagesPageType
    addMessage: (addMessage:string)=>void
   // isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    const [messageText, setMessageText] = useState('')
    const changeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value)
    }
    let dialogsElement = props.dialogsPage.dialogsData.map(i => <DialogItem name={i.name} id={i.id}/>)
    let messagesElement = props.dialogsPage.messages.map(i => <Message id={i.id} message={i.textMessage}/>)
    const onAddMessage = () => {
        if (messageText) {
            props.addMessage(messageText)
           /* props.dispatch(addMessageAC(messageText))*/
            setMessageText('')
        }
    }

    //if (!props.isAuth) return <Redirect to={'/login'}/> //If not authorised, redirect to Login
    return (
        <div className={dStyle.dialogPage}>
            <div className={dStyle.users}>
                {dialogsElement}
            </div>
            <div className={dStyle.dialogs}>
                {messagesElement}
                <textarea value={messageText} onChange={changeMessageText}/>
                <Button style={dStyle.button} title={'add'} callBack={onAddMessage}/>
            </div>
        </div>
    )
}
