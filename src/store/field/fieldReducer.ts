import {FIELD_SET} from "./fieldActions";
import {GameField} from "../../utils/gameField";

export interface fieldInterface {
    field: GameField
}

const initialState =
    {
        field: new GameField()
    }


export function fieldReducer(state = initialState, action: any) {
    switch (action.type) {
        case FIELD_SET: {
            return {
                ...state,
                field: {...action.payload}
            }
        }

        default:
            return {...state}
    }
}