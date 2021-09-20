import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FieldComponent } from '../Components/GameComponents/FieldComponent';
import { useTypedSelector } from '../Hooks/UseTypedSelector';
import { INIT_MINES } from '../Store/Types/Constants';
//import { MineCountContext } from '../Utils/Context';

interface IProps {
   col: number;
   row: number;
   minesNumber: number;
}

export const Game: FunctionComponent<IProps> = ({ col, minesNumber, row }) => {
   const dispatch = useDispatch();
   const [dead, setDead] = useState(false);
   const [win, setWin] = useState(false);
   dispatch({ type: INIT_MINES, payload: minesNumber });
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
