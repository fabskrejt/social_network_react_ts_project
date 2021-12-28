import React from "react";
import {default as axios} from "axios";
import {connect} from "react-redux";
import {appStateType} from "../../redux/store";
import {Dispatch} from "redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

/*
type ProfileAPIContainerPropsType = {
    setUserProfile: (profile: any) => void
}
*/

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        const userId = this.props.match.params.userId
        //  this.props.isFetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                    this.props.setUserProfile(response.data)
                    // this.props.isFetchingToggle(false)
                }
            )
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

type PathParamsType ={
    userId: string
}

type MapStateToPropsType = {
    profile: any
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: appStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile: any) => dispatch(setUserProfile(profile)),
        //setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
    }
}

const withRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer)
