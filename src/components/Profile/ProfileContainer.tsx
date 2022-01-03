import React from "react";
import {connect} from "react-redux";
import {appStateType} from "../../redux/store";
import Profile from "./Profile";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {UserReducerActionType} from "../../redux/users-reducer";

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

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
    userId: number
}

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType
 //@ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: appStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<appStateType, unknown, UserReducerActionType>): MapDispatchToPropsType => {
    return {
        setUserProfile: (userId: number) => dispatch(getUserProfileThunkCreator(userId)),
    }
}

const withRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer)
