import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import Profile from "./Profile";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    InitialProfileStateType, sendPhotoThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {UserReducerActionType} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<ProfileContainerPropsType, InitialProfileStateType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        userId && this.props.setUserProfile(userId)
        userId && this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<InitialProfileStateType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        userId: state.auth.id,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, unknown, UserReducerActionType>): MapDispatchToPropsType => {
    return {
        setUserProfile: (userId: number) => dispatch(getUserProfileThunkCreator(userId)),
        getUserStatus: (userId: number) => dispatch(getUserStatusThunkCreator(userId)),
        updateUserStatus: (status: string) => dispatch(updateUserStatusThunkCreator(status)),
        sendPhoto: (file: File) => dispatch(sendPhotoThunkCreator(file)),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

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
}
type MapDispatchToPropsType = {
    setUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    sendPhoto: (file: File) => void

}

type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType
// @ts-ignore
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType
