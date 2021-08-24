import { FunctionComponent, useState } from 'react';

import { FieldComponent } from '../Components/GameComponents/FieldComponent';
//import { MineCountContext } from '../Utils/Context';

interface IProps {
   col: number;
   row: number;
   minesNumber: number;
}

export const Game: FunctionComponent<IProps> = ({ col, minesNumber, row }) => {
   const [dead, setDead] = useState(false);
   // const [win, setWin] = useState(false);
   const GameOver = () => {
      setDead(true);
   };
   // const GameWin = () => {
   //    setWin(true);
   // };
   const render = () => {
      if (dead) {
         return <div style={{ position: 'relative', left: '45vw', top: '45vh' }}>Помяним!!</div>;
      }
      return <FieldComponent col={col} minesNumber={minesNumber} row={row} GameOver={GameOver} />;
   };

   return <div>{render()}</div>;
};
