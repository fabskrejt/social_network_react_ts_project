import React, {useState} from "react";

// export const ProfileStatus = () => {
//
//     const [editMode, setEditMode] = useState(false)
//     const changeStatusOn = () => {
//         setEditMode(true)
//     }
//     const changeStatusOff = () => {
//         setEditMode(false)
//     }
//     return (
//         <div>
//             {editMode ?
//                 <input onBlur={changeStatusOff} autoFocus/>
//                 : <span onDoubleClick={changeStatusOn}>Какой-то статус</span>
//             }
//         </div>
//     )
// }

export class ProfileStatus extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state ={
            editMode: false
        }
    }

    changeStatusOn = () => {debugger
       this.setState({editMode: true})

    }
    changeStatusOff = () => {
        this.setState({editMode: false})
    }
    render() {
        return (
            <div>
                {this.state.editMode ?
                    <input onBlur={this.changeStatusOff} autoFocus/>
                    : <span onDoubleClick={this.changeStatusOn}>Какой-то статус</span>
                }
            </div>
        )
    }
}