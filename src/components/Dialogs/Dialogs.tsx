import React from "react";
import {NavLink} from "react-router-dom";
import dStyle from './Dialogs.module.css'


type PropsOfDialogItem = {
    name: string
    id: string
}
const DialogItem = (props:PropsOfDialogItem) =>{

    return(
        <div className={dStyle.usersItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={dStyle.dialogPage}>
            <div className={dStyle.users}>
                <DialogItem name = {'Rusik'} id = {'1'}/>
                <DialogItem name = {'Toshik'} id = {'2'}/>
                <DialogItem name = {'Vovchick'} id = {'3'}/>
                <DialogItem name = {'Dimas'} id = {'4'}/>
                <DialogItem name = {'Kisli'} id = {'5'}/>


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