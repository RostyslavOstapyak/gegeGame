import {fieldInterface} from "./fieldReducer";

export interface stateInterface {
    fieldReducer: fieldInterface
    playerReducer: object
}

export const fieldSelector = (state: stateInterface) => state.fieldReducer.field