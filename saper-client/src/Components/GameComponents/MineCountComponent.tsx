//import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../Hooks/UseTypedSelector';

interface IMineCountComponent {
   GameWin?: () => void;
}

export const MineCountComponent = (p: IMineCountComponent) => {
   const minesCountState = useTypedSelector((state) => state.mines.mines);
   if (minesCountState === 0) {
      p.GameWin && p.GameWin();
   }
   return <div>Мин осталось:{minesCountState}</div>;
};
