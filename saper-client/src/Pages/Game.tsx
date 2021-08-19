import { FunctionComponent } from 'react';

import { FieldComponent } from '../Components/GameComponents/FieldComponent';

interface IProps {
   col: number;
   row: number;
   minesNumber: number;
}

export const Game: FunctionComponent<IProps> = ({ col, minesNumber, row }) => {
   return (
      <div>
         <FieldComponent col={col} minesNumber={minesNumber} row={row} />
      </div>
   );
};
