import React, {ChangeEvent, useState} from "react";
import dStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {ActionTypes, MessagesPageType} from "../../redux/state";
import {Button} from "../Button/Button";

type DialogsPropsType = {
    dialogsPage: MessagesPageType
    dispatch: (action: ActionTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const [messageText, setMessageText] = useState('')
    const changeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value)
    }
    let dialogsElement = props.dialogsPage.dialogsData.map(i => <DialogItem name={i.name} id={i.id}/>)
    let messagesElement = props.dialogsPage.messages.map(i => <Message id={i.id} message={i.textMessage}/>)
    const addMessage = () => {
        const action: ActionTypes = {
            type: 'ADD-MESSAGE',
            value: messageText
        }
        if (messageText) {
            props.dispatch(action)
            setMessageText('')
        }
    }

    return (
        <div className={dStyle.dialogPage}>
            <div className={dStyle.users}>
                {dialogsElement}
            </div>
            <div className={dStyle.dialogs}>
                {messagesElement}
                <textarea value={messageText} onChange={changeMessageText} />
                <Button style={dStyle.button} title={'add'} callBack={addMessage}/>
            </div>
        </div>
    )
}
