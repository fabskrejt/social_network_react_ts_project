import {v1} from "uuid";

export type UserType = {
    id: string
    name: string
    city: string
    education: string
    site: string
    folowed: boolean
    avatarURL: string

}
type InitialStateType = Array<UserType>

const initialState: InitialStateType = [
    {id: v1(), name: 'Rusik', city: 'Tomsk', education: 'TUSUR', site: 'non', folowed: true,
        avatarURL:'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',

    },
    {id: v1(), name: 'Toshik', city: 'Barnaul', education: 'AGU', site: 'non', folowed: false,
        avatarURL:'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
    },
    {id: v1(), name: 'Vovchik', city: 'Rostov-on-Don', education: 'TPU', site: 'www...', folowed: true,
        avatarURL:'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
    },
    {id: v1(), name: 'Dimas', city: 'Tomsk', education: 'TPU', site: 'non', folowed: true,
        avatarURL:'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
    },
    {id: v1(), name: 'Kisli', city: 'Tomsk', education: 'TUSUR', site: 'non', folowed: true,
        avatarURL:'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg',
    },
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

export const followAC = (id: string) => {
    return {
        type: 'FOLLOW',
        id
    } as const
}