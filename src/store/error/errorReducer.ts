import {ERROR_CLEAR, ERROR_SET} from "./errorActions";


export interface errorInterface {
    error: string
}

const initialState = {
    error: ""
}

export function errorReducer(state: errorInterface = initialState, action: any) {
    switch (action.type) {
        case ERROR_SET:
            return {
                ...state,
                error: action.payload
            }
        case ERROR_CLEAR :
            return {
                ...state,
                error: ""
            }
        default:
            return {...state}
    }
}