import dStyle from "./Message.module.css";
import React from "react";

type PropsOfMessage = {
    message: string
    id: string
}

const Message = (props: PropsOfMessage) => {
    return (
        <div className={dStyle.dialogsItem}> {props.message}</div>
    )
}

export default Message