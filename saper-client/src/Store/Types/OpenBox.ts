export interface OpenBoxState{
    openBoxes:number
}
export type BoxsActionType = OpenBoxType|InitBoxesType;

export enum BoxActionTypes{
INIT_BOXES = "INIT_BOXES",
OPEN_BOX = "OPEN_BOX"
}

export interface OpenBoxType{
    type:BoxActionTypes.OPEN_BOX
}

export interface InitBoxesType{
    type:BoxActionTypes.INIT_BOXES,
    payload:number
}