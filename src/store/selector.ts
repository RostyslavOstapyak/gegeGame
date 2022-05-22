import {fieldInterface} from "./fieldReducer";

export interface stateInterface {
    fieldReducer: fieldInterface
    playerReducer: object
}

export const fieldSelector = (state: stateInterface) => state.fieldReducer.field
export const boardSelector = (state:stateInterface)=>state.fieldReducer.board