import {fieldInterface} from "./field/fieldReducer";
import {playerInterface} from "./player/playerReducer";
import {actionResultInterface} from "../utils/gameField";

export interface stateInterface {
    fieldReducer: fieldInterface
    playerReducer: playerInterface
    errorReducer: actionResultInterface
}

export const fieldSelector = (state: stateInterface) => state.fieldReducer.field

export const playerSelector = (state: stateInterface) => state.playerReducer.player

export const dialogMessageSelector = (state: stateInterface) => state.errorReducer