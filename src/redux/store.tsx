import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";

let rootReducer = combineReducers({
    messagesPage: dialogReducer,
    profilePage: profileReducer,
})

export type appStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

