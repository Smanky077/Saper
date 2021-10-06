import { MineActionType, MineActionTypes} from '../Types/Mines';

export const SubMine = ():MineActionType=>{
    return{
        type: MineActionTypes.SUB_MINE
    }
};

export const AddMine = ():MineActionType=>{
    return{
        type: MineActionTypes.ADD_MINE
    }
};

export const InitMine = (payload:number):MineActionType=>{
    return{
        type: MineActionTypes.INIT_MINES,
        payload:payload
    }
};
