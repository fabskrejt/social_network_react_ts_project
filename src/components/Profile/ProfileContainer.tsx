import React from "react";
import {default as axios} from "axios";
import {connect} from "react-redux";
import {appStateType} from "../../redux/store";
import {Dispatch} from "redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfileAPIContainerPropsType = {
    setUserProfile:(profile:any)=>void
}

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType, any> {
    componentDidMount() {
        //  this.props.isFetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                    this.props.setUserProfile(response.data)
                    // this.props.isFetchingToggle(false)
                }
            )
    }

    render() {
        debugger
        return (
            <Profile {...this.props}/>
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
        setUserProfile: (profile: any) => dispatch(setUserProfile(profile)),
        //setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer)

export default ProfileAPIContainer