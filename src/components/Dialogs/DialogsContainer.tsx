import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/state";
import {addMessageAC} from "../../redux/dialog-reducer";

export const DialogsContainer = (props: { store: StoreType }) => {
    const state = props.store.getState()
    const addMessage = (messageText:string) => {
        if (messageText) {
            props.store.dispatch(addMessageAC(messageText))
        }
    }

    /*    dialogsPage={props.appState.messagesPage}
        dispatch={props.dispatch}*/
    return (
        <Dialogs dialogsPage={state.messagesPage}  addMessage={addMessage}/>
    )
}