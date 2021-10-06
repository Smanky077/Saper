
export interface IMinesState{
    mines:number
}
export type MineActionType = SubMineType|AddMineType|InitMineType;

export enum MineActionTypes{
SUB_MINE = "SUB_MINE",
INIT_MINES = "INIT_MINES",
ADD_MINE = "ADD_MINE",
}

export interface SubMineType{
    type:MineActionTypes.SUB_MINE,
}
export interface AddMineType{
    type:MineActionTypes.ADD_MINE,
}
export interface InitMineType{
    type:MineActionTypes.INIT_MINES,
    payload:number
}