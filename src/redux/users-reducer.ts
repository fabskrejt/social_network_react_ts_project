import {v1} from "uuid";

type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: string
    name: string
    city: string
    education: string
    site: string
    followed: boolean
    avatarURL: string
    photos: PhotosType
}
type InitialStateType1 = Array<UserType>
type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    count: number

}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    count: 3
}
/*const initialState: InitialStateType = [
/!*    {
        id: v1(), name: 'Rusik', city: 'Tomsk', education: 'TUSUR', site: 'non', followed: true,
        avatarURL: 'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
        photos: {small:'', large:''},

    },
    {
        id: v1(), name: 'Toshik', city: 'Barnaul', education: 'AGU', site: 'non', followed: false,
        avatarURL: 'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
        photos: {small:'', large:''}
    },
    {
        id: v1(), name: 'Vovchik', city: 'Rostov-on-Don', education: 'TPU', site: 'www...', followed: true,
        avatarURL: 'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
        photos: {small:'', large:''}
    },
    {
        id: v1(), name: 'Dimas', city: 'Tomsk', education: 'TPU', site: 'non', followed: true,
        avatarURL: 'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
        photos: {small:'', large:''}
    },
    {
        id: v1(), name: 'Kisli', city: 'Tomsk', education: 'TUSUR', site: 'non', followed: true,
        avatarURL: 'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
        photos: {small:'', large:''}
    },*!/
]*/

export const usersReducer = (state = initialState, action: UserReducerActionType) => {

    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(i => i.id === action.id ? {...i, followed: !i.followed} : i) }
        case "SET-USERS":
            return {...state, users:action.users}
        default:
            return state
    }
}


type UserReducerActionType = FollowACType | SetUsersACType

type FollowACType = ReturnType<typeof followAC>

export const followAC = (id: string) => {
    return {
        type: 'FOLLOW',
        id
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}