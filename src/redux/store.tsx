import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {StoreType} from "./state";

let reducer = combineReducers(    {
    messagesPage:dialogReducer,
    profilePage: profileReducer,
})

export let store:StoreType = createStore(reducer)

