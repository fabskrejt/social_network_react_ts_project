import React, {useState} from "react";

type ProfileStatusPropsType = {
    userStatus: string
    updateUserStatus: (status: string) => void
}
export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [userStatus, setUserStatus] = useState(props.userStatus)
    const changeStatusOn = () => {
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
                : <span onDoubleClick={changeStatusOn}>{props.userStatus}</span>
            }
        </div>
    )
}

// export class ProfileStatus extends React.Component<any, any>{
//     constructor(props: any) {
//         super(props);
//         this.state ={
//             editMode: false
//         }
//     }
//
//     changeStatusOn = () => {debugger
//        this.setState({editMode: true})
//
//     }
//     changeStatusOff = () => {
//         this.setState({editMode: false})
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.editMode ?
//                     <input onBlur={this.changeStatusOff} autoFocus/>
//                     : <span onDoubleClick={this.changeStatusOn}>Какой-то статус</span>
//                 }
//             </div>
//         )
//     }
// }