export const PLAYER_SET_PLAYER = "PLAYER_SET_PLAYER";
export const PLAYER_ACCEPT_ITEM = "PLAYER_ACCEPT_ITEM";

export const setPlayerCreator = (payload) => ({type: PLAYER_SET_PLAYER, payload});
export const playerAcceptItemCreator = (payload) => ({type: PLAYER_ACCEPT_ITEM, payload});