import {combineReducers, createStore} from "redux";
import {playerReducer} from "./player/playerReducer";
import {fieldReducer} from "./field/fieldReducer";
import {errorReducer} from "./error/errorReducer";

const rootReducer = combineReducers({
    playerReducer, fieldReducer, errorReducer
});

export const store = createStore(rootReducer);