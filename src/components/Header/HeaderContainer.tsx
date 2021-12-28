import React from "react";
import Header from "./Header";
import {default as axios} from "axios";
import {appStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true,
        })
            .then((response) => {
                    debugger
                    if (response.data.resultCode === 0) {
                        const {id, email, login} = response.data.data
                        this.props.setUserData(id, email, login)
                    }
                    //this.props.isFetchingToggle(false)
                }
            )
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}


const mapSateToProps = (state: appStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserData: (id: string, email: string, login: string) => dispatch(setUserData(id, email, login))
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(HeaderContainer)