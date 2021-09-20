import { ADD_MINE, INIT_MINES, SUB_MINE } from "../Types/Constants";
import { ImineAction, IMinesState } from "../Types/Interfaces";
 


const initialState:IMinesState = {
    mines: 0
}

export const minesCountReducer = (state=initialState,action:ImineAction):IMinesState=>{
    switch(action.type){
        case SUB_MINE:
            return {...state , mines:state.mines-1}
        case ADD_MINE:
            return {...state , mines:state.mines+1}
        case INIT_MINES: 
            return {...state,mines:action.payload}   
        default: 
            return state
            
        
    } 
}

