import { BoxActionTypes, BoxsActionType } from "../Types/OpenBox";


export const OpenBox = ():BoxsActionType=>{
    return{
        type: BoxActionTypes.OPEN_BOX
    }
};

export const InitBoxes = (payload:number):BoxsActionType=>{
    return{
        type: BoxActionTypes.INIT_BOXES,
        payload:payload
    }
};