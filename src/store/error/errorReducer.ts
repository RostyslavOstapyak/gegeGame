import {ERROR_CLEAR, ERROR_SET} from "./errorActions";
import {actionResult, actionResultInterface} from "../../utils/gameField";


const initialState: actionResultInterface = {
    message: actionResult.empty,
    payload: undefined,
    isError: false,
    isMessage: false,
}

export function errorReducer(state: actionResultInterface = initialState, action: any) {
    switch (action.type) {
        case ERROR_SET:
            return {
                ...state,
                ...action.payload,
            }
        case ERROR_CLEAR :
            return {
                ...state,
                ...initialState
            }
        default:
            return {...state}
    }
}