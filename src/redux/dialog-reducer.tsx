import {v1} from "uuid";
import {ActionTypes, MessagesPageType, MessagesType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';

export const dialogReducer = (state: MessagesPageType, action: ActionTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesType = {id: v1(), textMessage: action.value}
            state.messages.push(newMessage)
            return state
    }
    return state
}

export const addMessageAC = (messageText: string): ActionTypes => ({
    type: ADD_MESSAGE,
    value: messageText
})