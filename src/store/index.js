import {combineReducers, createStore} from "redux";
import {playerReducer} from "./playerReducer";
import {fieldReducer} from "./fieldReducer";

const rootReducer = combineReducers({
    playerReducer,
    fieldReducer
});

export const store = createStore(rootReducer);