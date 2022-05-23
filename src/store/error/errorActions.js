export const ERROR_SET = "ERROR_SET";
export const ERROR_CLEAR = "ERROR_CLEAR"

export const errorActionCreator = (payload) => ({type: ERROR_SET, payload});
export const errorClearCreator = () => ({type: ERROR_CLEAR});