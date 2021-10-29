import dStyle from "./Message.module.css";
import React, {ChangeEvent, useState} from "react";

type PropsOfMessage = {
    message: string
    id: string
}

const Message = (props: PropsOfMessage) => {
    return (
        <div>
            <div className={dStyle.dialogsItem}> {props.message}</div>
        </div>

    )
}

export default Message