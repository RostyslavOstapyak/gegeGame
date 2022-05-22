import {fieldInterface} from "./fieldReducer";
import {playerInterface} from "./playerReducer";

export interface stateInterface {
    fieldReducer: fieldInterface
    playerReducer: playerInterface
}

export const fieldSelector = (state: stateInterface) => state.fieldReducer.field
export const boardSelector = (state: stateInterface) => state.fieldReducer.board

export const playerSelector = (state: stateInterface) => state.playerReducer.player