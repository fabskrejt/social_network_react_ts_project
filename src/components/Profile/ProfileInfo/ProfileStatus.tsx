import React, {useEffect, useState} from "react";

type ProfileStatusPropsType = {
    userStatus: string
    updateUserStatus: (status: string) => void
}
export const ProfileStatus =React.memo((props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [userStatus, setUserStatus] = useState(props.userStatus)
    useEffect(() => {
        setUserStatus(props.userStatus)
    }, [props.userStatus])

    const changeStatusOn = () => {
        //setUserStatus(props.userStatus)
        setEditMode(true)
    }
    const changeStatusOff = () => {
        setEditMode(false)
        props.updateUserStatus(userStatus)
    }
    return (
        <div>
            {editMode ?
                <input value={userStatus} onChange={(e) => setUserStatus(e.currentTarget.value)}
                       onBlur={changeStatusOff} autoFocus/>
                : <span onDoubleClick={changeStatusOn}>{props.userStatus || 'Добавте статус'} </span>
            }
        </div>
    )
})
