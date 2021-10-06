import { FunctionComponent, useState } from 'react';
import { FieldComponent } from '../Components/GameComponents/FieldComponent';
import { useActions } from '../Hooks/UseActions';
import { InitMine } from '../Store/ActionCreators/minesCounterActions';
//import { MineCountContext } from '../Utils/Context';

interface IProps {
   col: number;
   row: number;
   minesNumber: number;
}

export const Game: FunctionComponent<IProps> = ({ col, minesNumber, row }) => {
   const { InitMine, InitBoxes } = useActions();
   const [dead, setDead] = useState(false);
   const [win, setWin] = useState(false);

   InitMine(minesNumber);
   InitBoxes(col * row - minesNumber);
   const GameOver = () => {
      setDead(true);
   };
   const GameWin = () => {
      setWin(true);
   };

   const render = () => {
      if (dead) {
         return <div style={{ position: 'relative', left: '45vw', top: '45vh' }}>Помяним!!</div>;
      }
      if (win) {
         return <div style={{ position: 'relative', left: '45vw', top: '45vh' }}>Поздравим!!!</div>;
      }
      return <FieldComponent col={col} minesNumber={minesNumber} row={row} GameOver={GameOver} GameWin={GameWin} />;
   };

   return <div>{render()}</div>;
};
