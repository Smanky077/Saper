import { FunctionComponent, useState } from 'react';

import { FieldComponent } from '../Components/GameComponents/FieldComponent';
import { MineCountContext } from '../Utils/Context';

interface IProps {
   col: number;
   row: number;
   minesNumber: number;
}

export const Game: FunctionComponent<IProps> = ({ col, minesNumber, row }) => {
   const [win, setWin] = useState(minesNumber);
   const value = { win, setWin };
   return (
      <MineCountContext.Provider value={value}>
         <div>
            <FieldComponent col={col} minesNumber={minesNumber} row={row} />
         </div>
      </MineCountContext.Provider>
   );
};
