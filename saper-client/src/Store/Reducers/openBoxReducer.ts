import { BoxActionTypes, BoxsActionType, OpenBoxState } from "../Types/OpenBox";


const initialState:OpenBoxState = {
    openBoxes:0
}

export const OpenBoxReducer=(state = initialState, action:BoxsActionType):OpenBoxState=>{
    switch (action.type) {
        case BoxActionTypes.INIT_BOXES:
           return {...state, openBoxes:action.payload} 
        case BoxActionTypes.OPEN_BOX:
            return {...state, openBoxes:state.openBoxes-1}
        default:
            return state
    }
}