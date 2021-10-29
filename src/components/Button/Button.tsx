import React from "react";

type ButtonPropsType = {
    callBack: () => void
    title: string
    style: string
}
export const Button = (props: ButtonPropsType) => {
    const onclickHandler = () => props.callBack()
    return (
        <button className={props.style} onClick={onclickHandler}>{props.title}</button>
    )
}