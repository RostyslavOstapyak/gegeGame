import { FIELD_SET_BOARD} from "./fieldActions";
import {GameField} from "../utils/gameField";
import {GameCell} from "../utils/gameCell";

export interface fieldInterface {
    field: GameField
    board: GameCell[][]
}

const initialState =
    {
        field:new GameField()
    }


export function fieldReducer(state = initialState, action: any) {
    switch (action.type) {

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