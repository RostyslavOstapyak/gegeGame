import {FIELD_SET, FIELD_SET_BOARD} from "./fieldActions";
import {GameField} from "../utils/gameField";
import {GameCell} from "../utils/gameCell";

export interface fieldInterface {
    field: GameField
    board: GameCell[][]
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
        case FIELD_SET_BOARD: {
            return {
                board: action.payload,
                ...state
            }
        }
        default:
            return {...state}
    }
}