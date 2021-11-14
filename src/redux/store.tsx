import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";

let reducer = combineReducers(    {
    messagesPage:dialogReducer,
    profilePage: profileReducer,
})
export let store = createStore(reducer)
