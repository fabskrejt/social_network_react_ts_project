import {ActionTypes, PostsDataType, ProfilePageType} from "./state";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';

export const profileReducer = (state:ProfilePageType, action:ActionTypes) => {
    switch (action.type){
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
