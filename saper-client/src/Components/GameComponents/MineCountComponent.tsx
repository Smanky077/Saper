//import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../Hooks/UseTypedSelector';

interface IMineCountComponent {
   GameWin?: () => void;
}

export const MineCountComponent = (p: IMineCountComponent) => {
   const minesCountState = useTypedSelector((state) => state.mines.mines);
   const openBoxesState = useTypedSelector((state) => state.boxes.openBoxes);

   if (minesCountState === 0 && openBoxesState === 0) {
      p.GameWin && p.GameWin();
   }
   return <div>Мин осталось:{minesCountState}</div>;
};
