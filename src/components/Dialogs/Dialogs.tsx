import React from "react";
import {NavLink} from "react-router-dom";
import dStyle from './Dialogs.module.css'


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

type PropsOfMessage = {
    message: string
}
const Message = (props: PropsOfMessage) => {
    return (
        <div className={dStyle.dialogsItem}> {props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={dStyle.dialogPage}>
            <div className={dStyle.users}>
                <DialogItem name={'Rusik'} id={'1'}/>
                <DialogItem name={'Toshik'} id={'2'}/>
                <DialogItem name={'Vovchick'} id={'3'}/>
                <DialogItem name={'Dimas'} id={'4'}/>
                <DialogItem name={'Kisli'} id={'5'}/>
            </div>
            <div className={dStyle.dialogs}>
                <Message message={'Message 1'}/>
                <Message message={'Message 2'}/>
                <Message message={'Message 3'}/>
                <Message message={'Message 4'}/>
                <Message message={'Message 5'}/>
            </div>
        </div>
    )
}

export default Dialogs