import {Player} from "../../utils/player";
import {PLAYER_ACCEPT_ITEM, PLAYER_SET_PLAYER} from "./playerActions";
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
        case PLAYER_ACCEPT_ITEM:
            if (action.payload === 0) return {...state}
            const resultArr = [...state.player.inventory, action.payload]
            return {
                ...state,
                player: {
                    ...state.player,
                    inventory: resultArr
                }
            }
        default:
            return {...state}
    }
}