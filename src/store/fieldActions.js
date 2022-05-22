export const FIELD_SET = "FIELD_SET"
export const FIELD_SET_BOARD = "FIELD_SET_BOARD"

export const setFieldCreator = (payload) => ({type: FIELD_SET, payload});
export const setBoardCreator = (payload) => ({type: FIELD_SET_BOARD, payload})