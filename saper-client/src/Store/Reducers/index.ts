import {combineReducers} from "redux";
import { minesCountReducer } from "./minesCountReducer";
import { OpenBoxReducer } from "./openBoxReducer";


export const rootReducer = combineReducers({
    mines:minesCountReducer,
    boxes:OpenBoxReducer
})

export type RootState = ReturnType<typeof rootReducer>