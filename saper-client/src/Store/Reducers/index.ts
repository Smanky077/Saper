import {combineReducers} from "redux";
import { minesCountReducer } from "./minesCountReducer";


export const rootReducer = combineReducers({
    mines:minesCountReducer,
})

export type RootState = ReturnType<typeof rootReducer>