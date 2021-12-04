import React from "react";
import {appStateType} from "../../redux/store";
import {followAC} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";

const mapStateToProps = (state: appStateType) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: string) => dispatch(followAC(id))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)