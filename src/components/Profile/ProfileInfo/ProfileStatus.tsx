import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

type ProfileStatusPropsType = {
    userStatus: string
    updateUserStatus: (status: string) => void
}
export const ProfileStatus = React.memo((props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [userStatus, setUserStatus] = useState(props.userStatus)

    let params = useParams<{userId:string}>()
    useEffect(() => {
        setUserStatus(props.userStatus)
    }, [props.userStatus])

    const changeStatusOn = () => {debugger
         if(!params.userId){
            setEditMode(true)
        }
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
