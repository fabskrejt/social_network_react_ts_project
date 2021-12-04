import React from "react";
import {v1} from "uuid";

type UserType = {
    id: string
    name: string
    city: string
    education: string
    site: string
    folowed: boolean

}
type InitialStateType = Array<UserType>

const initialState: InitialStateType = [
    {id: v1(), name: 'Rusik', city: 'Tomsk', education: 'TUSUR', site: 'non', folowed: true},
    {id: v1(), name: 'Toshik', city: 'Barnaul', education: 'AGU', site: 'non', folowed: false},
    {id: v1(), name: 'Vovchik', city: 'Rostov-on-Don', education: 'TPU', site: 'www...', folowed: true},
    {id: v1(), name: 'Dimas', city: 'Tomsk', education: 'TPU', site: 'non', folowed: true},
    {id: v1(), name: 'Kisli', city: 'Tomsk', education: 'TUSUR', site: 'non', folowed: true},
]

export const usersReducer = (state = initialState, action: UserReducerActionType) => {

    switch (action.type) {
            case 'FOLLOW':
                    return state.map(i=> i.id === action.id ? {...i, followed: !i.folowed} : i)
        default:
            return state
    }
}

type UserReducerActionType = FollowACType

type FollowACType = ReturnType<typeof followAC>

const followAC = (id: string) => {
    return {
        type: 'FOLLOW',
        id
    }
}