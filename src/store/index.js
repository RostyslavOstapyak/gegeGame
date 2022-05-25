import {combineReducers, createStore} from "redux";
import {playerReducer} from "./player/playerReducer";
import {fieldReducer} from "./field/fieldReducer";
import {errorReducer} from "./error/errorReducer";
import {dragItemReducer} from "./dragItem/dragItemReducer";

const rootReducer = combineReducers({
    playerReducer,
    fieldReducer,
    errorReducer,
    dragItemReducer
});

export const store = createStore(rootReducer);