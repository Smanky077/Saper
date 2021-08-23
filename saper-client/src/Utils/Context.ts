import React,{ createContext, useContext } from 'react';

 
interface Context<T> {
    min:T;
    setMin:React.Dispatch<React.SetStateAction<T>>;
}

export const  GameContext = createContext<Context<boolean>>({ min:false,setMin:()=>{}});
export const MineCountContext = createContext<Context<number>>({ min:0,setMin:()=>{}});
export const UseGameContext = () => useContext(MineCountContext);