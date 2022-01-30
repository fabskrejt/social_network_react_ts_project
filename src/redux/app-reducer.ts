const initialState = {
    isInitialised: false
}

type  InitialStateType = typeof initialState
type ActionType = initialisedActionType

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALISED":
            return {...state, isInitialised: true}
        default:
            return state
    }
}

type initialisedActionType = ReturnType<typeof initialisedAC>

export const initialisedAC = () => {
    return {
        type: 'SET-INITIALISED'
    }
}