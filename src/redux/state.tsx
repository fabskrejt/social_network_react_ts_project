import {renderEntireTree} from "../render";

type DialogsDataType = {
    id: number
    name: string

}

export type MessagesType = {
    id: number
    textMessage: string
}

export type PostsDataType = {
    postText: string
    like: number
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

export let state: StateType = {
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Rusik'},
            {id: 2, name: 'Toshik'},
            {id: 3, name: 'Vovchick'},
            {id: 4, name: 'Dimas'},
            {id: 5, name: 'Kisli'},
        ],
        messages: [
            {id: 1, textMessage: 'Message 1'},
            {id: 2, textMessage: 'Message 2'},
            {id: 3, textMessage: 'Message 3'},
            {id: 4, textMessage: 'Message 4'},
            {id: 5, textMessage: 'Message 5'},
            {id: 6, textMessage: 'Message 6'},
            {id: 7, textMessage: 'Message 7'},
        ]
    },
    profilePage: {
        postsData: [
            {postText: 'Hello my friends', like: 15},
            {postText: 'How are you?', like: 5},
            {postText: 'What are you do?', like: 25},
        ]
    }
}

export const addPost = (value: string) => {
    const newPost: PostsDataType = {postText: value, like: 10}
    state.profilePage.postsData.unshift(newPost)
    renderEntireTree(state)
}



