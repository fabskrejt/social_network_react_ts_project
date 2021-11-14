import {ActionTypes, PostsDataType, ProfilePageType} from "./state";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const initialState = {
    postsData: [
        {id: v1(), postText: 'Hello my friends', like: 15},
        {id: v1(), postText: 'How are you?', like: 5},
        {id: v1(), postText: 'What are you do?', like: 25},
    ]
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {id: v1(), postText: action.value, like: 10}
            state.postsData.unshift(newPost)
            return state
    }
    return state
}

export const addPostAC = (postChangeValue: string): ActionTypes => ({
    type: ADD_POST,
    value: postChangeValue,
})
