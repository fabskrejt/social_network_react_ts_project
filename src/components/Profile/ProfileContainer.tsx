import React from "react";
import {default as axios} from "axios";
import {connect} from "react-redux";
import {appStateType} from "../../redux/store";
import {Dispatch} from "redux";
import Profile from "./Profile";


export class ProfileAPIContainer extends React.Component<any, any> {
    componentDidMount() {
        //  this.props.isFetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                    // this.setUsers(response.data.items)
                    // this.props.isFetchingToggle(false)
                }
            )
    }

    render() {
        return (
            <Profile/>
        )
    }
}

const mapStateToProps = (state: appStateType) => {
    return {
        profile: state.profilePage.profile

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile:
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer)

export default ProfileAPIContainer