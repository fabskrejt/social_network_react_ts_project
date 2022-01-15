import {v1} from "uuid";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


export type PostsDataType = {
    postText: string
    like: number
    id: string
}

/*export type ProfilePageType = {
    postsData: Array<PostsDataType>
}*/
const initialState = {
    postsData: [
        {id: v1(), postText: 'Hello my friends', like: 15},
        {id: v1(), postText: 'How are you?', like: 5},
        {id: v1(), postText: 'What are you do?', like: 25},
    ] as Array<PostsDataType>,
    profile: {
        "aboutMe": "",
        "contacts":  {
            "facebook": "",
            "website": null,
            "vk": "",
            "twitter": '',
            "instagram": '',
            "youtube": null,
            "github": '',
            "mainLink": null,
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": '',
        "fullName": '',
        "userId": null,
        "photos": {
            "small": '',
            "large": '',
        }
    }
}



type InitialStateType = typeof initialState
export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    debugger
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {id: v1(), postText: action.value, like: 10}
            return {...state, postsData: [newPost, ...state.postsData]}
        case SET_USER_PROFILE:
            return {...state, profile: {...action.profile}}
    }
    return state
}

export type ActionTypes = AddPostActionType | setUserProfileType

type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = (value: any) => {
    return {
        type: ADD_POST,
        value,
    } as const
}

export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    } as const
}

export const getUserProfileThunkCreator = (userId:number)=>{
   return (dispatch: Dispatch)=>{
       //  this.props.isFetchingToggle(true)
       usersAPI.getProfile(userId)
           .then((data) => {
               debugger
                   dispatch(setUserProfile(data))
                   // this.props.isFetchingToggle(false)
               }
           )
   }
}
