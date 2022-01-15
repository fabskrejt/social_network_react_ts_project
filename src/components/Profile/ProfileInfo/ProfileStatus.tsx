import React, {useState} from "react";

export const ProfileStatus = () => {

    const [editMode, setEditMode] = useState(false)
    const changeStatusOn = () => {
        setEditMode(true)
    }
    const changeStatusOff = () => {
        setEditMode(false)
    }
    return (
        <div>
            {editMode ?
                <input onBlur={changeStatusOff} autoFocus/>
                : <span onDoubleClick={changeStatusOn}>Какой-то статус</span>
            }
        </div>
    )
}