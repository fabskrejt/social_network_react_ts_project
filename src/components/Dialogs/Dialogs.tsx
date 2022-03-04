import React, {ChangeEvent, useState} from "react";
import dStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagesPageType} from "../../redux/dialog-reducer";
import {Field, Form} from 'react-final-form'

type DialogsPropsType = {
    dialogsPage: MessagesPageType
    addMessage: (addMessage: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const [messageText, setMessageText] = useState('')
    const changeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value)
    }
    let dialogsElement = props.dialogsPage.dialogsData.map(i => <DialogItem name={i.name} id={i.id}/>)
    let messagesElement = props.dialogsPage.messages.map(i => <Message id={i.id} message={i.textMessage}/>)
    const onAddMessage = (value: { message: string }) => {
        if (value.message) {
            props.addMessage(value.message)
            setMessageText('')
        }
    }
    return (
        <div className={dStyle.dialogPage}>
            <div className={dStyle.users}>
                {dialogsElement}
            </div>
            <div className={dStyle.dialogs}>
                <div>
                    {messagesElement}
                </div>
                <DialogsForm messageText={messageText} changeMessageText={changeMessageText}
                             onAddMessage={onAddMessage}/>
            </div>
        </div>
    )
}

type DialogsFormPropsType = {
    messageText: string
    changeMessageText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onAddMessage: (value: { message: string }) => void
}

export const DialogsForm = (props: DialogsFormPropsType) => {

    return (
        <div className={dStyle.formStyle}>
            <Form onSubmit={props.onAddMessage} render={({handleSubmit, values}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'message'} component={'textarea'}/>
                    <button type="submit">Send</button>
                </form>
            )}
            />
        </div>
    )
}