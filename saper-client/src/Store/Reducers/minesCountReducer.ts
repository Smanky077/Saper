import { MineActionType, IMinesState ,MineActionTypes} from "../Types/Mines";
 


const initialState:IMinesState = {
    mines: 0
}

export const minesCountReducer = (state=initialState,action:MineActionType):IMinesState=>{
    switch(action.type){
        case MineActionTypes.SUB_MINE:
            return {...state , mines:state.mines-1}
        case MineActionTypes.ADD_MINE:
            return {...state , mines:state.mines+1}
        case MineActionTypes.INIT_MINES: 
            return {...state,mines:action.payload}   
        default: 
            return state
            
        
    } 
}

