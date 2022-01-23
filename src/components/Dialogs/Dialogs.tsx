import React, {ChangeEvent, useState} from "react";
import dStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
/*import {ActionTypes, MessagesPageType} from "../../redux/state";*/
import {Button} from "../Button/Button";
import {MessagesPageType} from "../../redux/dialog-reducer";
import {Form, Field} from 'react-final-form'

type DialogsPropsType = {
    dialogsPage: MessagesPageType
    addMessage: (addMessage: string) => void
    // isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    const [messageText, setMessageText] = useState('')
    const changeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value)
    }
    let dialogsElement = props.dialogsPage.dialogsData.map(i => <DialogItem name={i.name} id={i.id}/>)
    let messagesElement = props.dialogsPage.messages.map(i => <Message id={i.id} message={i.textMessage}/>)
    const onAddMessage = (value:any) => {
        if (value.message) {
            props.addMessage(value.message)
            /* props.dispatch(addMessageAC(messageText))*/
            setMessageText('')
        }

        /*        if (messageText) {
            props.addMessage(messageText)
            /!* props.dispatch(addMessageAC(messageText))*!/
            setMessageText('')
        }*/
    }

    //if (!props.isAuth) return <Redirect to={'/login'}/> //If not authorised, redirect to Login
    return (
        <div className={dStyle.dialogPage}>
            <div className={dStyle.users}>
                {dialogsElement}
            </div>
            <div className={dStyle.dialogs}>
                {messagesElement}
                <DialogsForm messageText={messageText} changeMessageText={changeMessageText}
                             onAddMessage={onAddMessage}/>
                {/*                <textarea value={messageText} onChange={changeMessageText}/>
                <Button style={dStyle.button} title={'add'} callBack={onAddMessage}/>*/}
            </div>
        </div>
    )
}

type DialogsFormPropsType = {
    messageText: string
    changeMessageText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onAddMessage: (value:any) => void
}

export const DialogsForm = (props: DialogsFormPropsType) => {
    return (
        <div className={dStyle.dialogs}>
            <Form onSubmit={props.onAddMessage} render={({handleSubmit, values}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'message'} component={'textarea'} />
                    <button type="submit">Send</button>
                    {/*   // <textarea value={props.messageText} onChange={props.changeMessageText}/>
                    //<Button style={dStyle.button} title={'add'} callBack={props.onAddMessage}/>*/}
                </form>
            )}/>

        </div>
    )
}