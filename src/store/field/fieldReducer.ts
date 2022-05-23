import {FIELD_SET} from "./fieldActions";
import {GameField} from "../../utils/gameField";

export interface fieldInterface {
    field: GameField
}

const initialState =
    {
        field: new GameField()
    }


export function fieldReducer(state = initialState, action: { type: string, payload: GameField }) {
    switch (action.type) {
        case FIELD_SET: {
            const updatedField = new GameField()
            updatedField.updateField(action.payload)
            return {
                ...state,
                field: updatedField
            }
        }

        default:
            return {...state}
    }
}