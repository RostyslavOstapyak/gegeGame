import {FIELD_SET, FIELD_SET_BOARD} from "./fieldActions";
import {GameField} from "../../utils/gameField";
import {GameCell} from "../../utils/gameCell";

export interface fieldInterface {
    field: GameField
}

const initialState =
    {
        field:new GameField()
    }


export function fieldReducer(state = initialState, action: any) {
    switch (action.type) {
        case FIELD_SET:{
            return {
                ...state,
                field: {...action.payload}
            }
        }

        default:
            return {...state}
    }
}