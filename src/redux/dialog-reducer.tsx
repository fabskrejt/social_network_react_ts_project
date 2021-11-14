import {v1} from "uuid";
import {ActionTypes, MessagesPageType, MessagesType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const initialState = {
    dialogsData: [
        {id: v1(), name: 'Rusik'},
        {id: v1(), name: 'Toshik'},
        {id: v1(), name: 'Vovchick'},
        {id: v1(), name: 'Dimas'},
        {id: v1(), name: 'Kisli'},
    ],
    messages: [
        {id: v1(), textMessage: 'Message 1'},
        {id: v1(), textMessage: 'Message 2'},
        {id: v1(), textMessage: 'Message 3'},
        {id: v1(), textMessage: 'Message 4'},
        {id: v1(), textMessage: 'Message 5'},
        {id: v1(), textMessage: 'Message 6'},
        {id: v1(), textMessage: 'Message 7'},
    ]
}

export const dialogReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {

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