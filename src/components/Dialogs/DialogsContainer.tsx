import {Dialogs} from "./Dialogs";
import {addMessageAC, MessagesPageType} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {appStateType} from "../../redux/store";
import {Dispatch} from "redux";

/*export const DialogsContainer = (props: { store: StoreType }) => {
    const state = props.store.getState()
    const addMessage = (messageText: string) => {
        if (messageText) {
            props.store.dispatch(addMessageAC(messageText))
        }
    }

    /!*    dialogsPage={props.appState.messagesPage}
        dispatch={props.dispatch}*!/
    return (
        <Dialogs dialogsPage={state.messagesPage} addMessage={addMessage}/>
    )
}*/
type MapStatePropsType ={
    dialogsPage:MessagesPageType
}

type MapDispatchPropsType ={
    addMessage: (messageText:string) => void
}

const mapStateToProps = (state:appStateType): MapStatePropsType => {
    return {
        dialogsPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addMessage: (messageText:string) => dispatch(addMessageAC(messageText)),
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)