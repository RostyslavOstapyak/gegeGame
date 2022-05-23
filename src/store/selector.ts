import {fieldInterface} from "./field/fieldReducer";
import {playerInterface} from "./player/playerReducer";
import {errorInterface} from "./error/errorReducer";

export interface stateInterface {
    fieldReducer: fieldInterface
    playerReducer: playerInterface
    errorReducer: errorInterface
}

export const fieldSelector = (state: stateInterface) => state.fieldReducer.field

export const playerSelector = (state: stateInterface) => state.playerReducer.player

export const errorSelector = (state: stateInterface) => state.errorReducer