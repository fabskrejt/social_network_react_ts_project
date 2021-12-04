import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";

let rootReducer = combineReducers({
    messagesPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

export type appStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

