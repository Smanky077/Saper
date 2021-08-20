import React,{ createContext, useContext } from 'react';

 
interface Context<T> {
    win:T;
    setWin:React.Dispatch<React.SetStateAction<T>>;
}

export const  GameContext = createContext<Context<boolean>>({ win:false,setWin:()=>{}});
export const MineCountContext = createContext<Context<number>>({ win:0,setWin:()=>{}});
export const UseGameContext = () => useContext(MineCountContext);