import {FIELD_SET} from "./fieldActions";
import {GameField} from "../utils/gameField";

export interface fieldInterface {
    field: GameField
}

const initialState =
    {}


export function fieldReducer(state = initialState, action: any) {
    switch (action.type) {
        case FIELD_SET: {
            return {
                field: action.payload,
                ...state
            }
        }
        default:
            return {...state}
    }
}