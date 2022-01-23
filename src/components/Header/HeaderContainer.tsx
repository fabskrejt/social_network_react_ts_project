import React from "react";
import Header from "./Header";
import {appStateType} from "../../redux/store";
import {AuthReducerActionTypes, getAuthUserDataThunkCreator, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.setUserData()
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
        )
    }
}

const mapSateToProps = (state: appStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,

    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<appStateType, unknown, AuthReducerActionTypes>) => {
    return {
        setUserData: () => dispatch(getAuthUserDataThunkCreator()),
        logout: () => dispatch(logout())

    }
}
export default connect(mapSateToProps, mapDispatchToProps)(HeaderContainer)