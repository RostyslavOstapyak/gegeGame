import {Player} from "../../utils/player";
import {PLAYER_SET_PLAYER} from "./playerActions";
import {initialPlayer} from "../../utils/initialPlayer";


export interface playerInterface {
    player: Player
}

const initialState =
    {
        player: initialPlayer
    }


export function playerReducer(state = initialState, action: any) {
    switch (action.type) {
        case PLAYER_SET_PLAYER:
            return {
                ...state,
                player: action.payload
            }
        default:
            return {...state}
    }
}