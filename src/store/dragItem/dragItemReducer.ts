import {inventoryCellInterface} from "../../utils/player";
import {ITEM_SET} from "./dragItemActions";

export interface dragItemInterface {
    item: inventoryCellInterface | null
}

const initialState = {
    item: null
}

export function dragItemReducer(state: dragItemInterface = initialState, action: any) {
    switch (action.type) {
        case ITEM_SET:
            return {
                ...state,
                item: action.payload
            }
        default:
            return {...state}
    }


}