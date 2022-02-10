import React from "react";
import {connect} from "react-redux";
import {appStateType} from "../../redux/store";
import Profile from "./Profile";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer";
import {RouteComponentProps, useParams, withRouter} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {UserReducerActionType} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<PropsType, any> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
        }

        userId && this.props.setUserProfile(userId)
        userId && this.props.getUserStatus(userId)
    }

    render() {console.log('ProfileContainer')
        // if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props}/>
        )
    }
}


//types
export type ProfileType = {
    "aboutMe": string
    "contacts": {
        "facebook": string | null
        "website": string | null
        "vk": string | null
        "twitter": string | null
        "instagram": string | null
        "youtube": string | null
        "github": string | null
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number | null,
    "photos": {
        "small": string
        "large": string
    }
}

type PathParamsType = {
    userId: number | null
}

type MapStateToPropsType = {
    profile: ProfileType
    userStatus: string
    userId: number | null
    //isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void

}

type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType
// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: appStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        userId: state.auth.id,
        //isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<appStateType, unknown, UserReducerActionType>): MapDispatchToPropsType => {
    return {
        setUserProfile: (userId: number) => dispatch(getUserProfileThunkCreator(userId)),
        getUserStatus: (userId: number) => dispatch(getUserStatusThunkCreator(userId)),
        updateUserStatus: (status: string) => dispatch(updateUserStatusThunkCreator(status)),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

