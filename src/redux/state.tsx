import {v1} from "uuid";

type DialogsDataType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    textMessage: string
}

export type PostsDataType = {
    postText: string
    like: number
    id: string
}

export type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messages: Array<MessagesType>
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
}

export type  StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
}
export let renderEntireTree = (state: StateType) => {
    console.log('rerender ')
}

export let state: StateType = {
    messagesPage: {
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
    },
    profilePage: {
        postsData: [
            {id: v1(), postText: 'Hello my friends', like: 15},
            {id: v1(), postText: 'How are you?', like: 5},
            {id: v1(), postText: 'What are you do?', like: 25},
        ]
    }
}

export const addPost = (value: string) => {
    const newPost: PostsDataType = {id: v1(), postText: value, like: 10}
    state.profilePage.postsData.unshift(newPost)
    renderEntireTree(state)
}


export const addMessage = (value: string) => {
    const newMessage: MessagesType = {id: v1(), textMessage: value}
    state.messagesPage.messages.push(newMessage)
    renderEntireTree(state)
}

export const subscribe = (observer: () => void) => {
    renderEntireTree = observer
}
