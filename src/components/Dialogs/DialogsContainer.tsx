import {Dialogs} from "./Dialogs";
import {addMessageAC, MessagesPageType} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {appStateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type MapStatePropsType = {
    dialogsPage: MessagesPageType
    //isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: (messageText: string) => void
}

const mapStateToProps = (state: appStateType): MapStatePropsType => {
    return {
        dialogsPage: state.messagesPage,
        //  isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (messageText: string) => dispatch(addMessageAC(messageText)),
    }
}

export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
