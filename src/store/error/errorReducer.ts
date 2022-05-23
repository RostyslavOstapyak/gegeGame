import {ERROR_CLEAR, ERROR_SET} from "./errorActions";
import {Enemy} from "../../utils/enemy";


export interface errorInterface {
    message: string
    value: Enemy | null

}

const initialState = {
    message: "",
    value: null
}

export function errorReducer(state: errorInterface = initialState, action: any) {
    switch (action.type) {
        case ERROR_SET:
            return {
                ...state,
                message: action.payload.message,
                value: action.payload.value
            }
        case ERROR_CLEAR :
            return {
                ...state,
                message: "",
                value: null
            }
        default:
            return {...state}
    }
}