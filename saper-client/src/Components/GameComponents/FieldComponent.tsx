import { useState } from 'react';

import { FieldGenerator, Rand } from '../../Utils/Helpers';
import { PlayBoxComponent } from './PlayBoxComponent';
import { MineCountComponent } from './MineCountComponent';
import { Box } from '../../Models/Box';
interface IFieldComponent {
   col: number;
   minesNumber: number;
   row: number;
   GameOver?: () => void;
   GameWin?: () => void;
}

export const FieldComponent = (props: IFieldComponent) => {
   const { col, row, minesNumber, GameOver } = props;
   const array = new Array<Box[]>(row).fill(new Array(col).fill(new Box()));
   const [arr, setArr] = useState<Box[][]>(array);
   const [isStarted, setStart] = useState(false);
   const [firstPos, setFirstPos] = useState(new Array<number>());

   const firstClick = (a: number[]) => {
      setStart(true);
      setFirstPos(a);
      minesRender(a);
   };

   const minesRender = (firstPos: number[]) => {
      let i = -1;
      let j = -1;
      let arr = FieldGenerator(col, row, minesNumber, firstPos);
      let mainArr: Box[][] = [];
      let array1: Box[] = [];
      arr.forEach((e) => {
         i++;
         j = -1;
         array1 = [];
         e.forEach((e) => {
            j++;
            let Box: Box = { isOpen: false, position: [i, j], value: e };
            array1.push(Box);
         });
         mainArr.push(array1);
      });
      setArr(mainArr);
   };

   const render = () => {
      let i = -1;
      let j = -1;
      return (
         <div>
            {arr.map((e) => {
               i++;
               j = -1;
               return (
                  <div key={Rand()} style={{ display: 'flex' }}>
                     {e.map((e) => {
                        j++;
                        return (
                           <PlayBoxComponent
                              key={Rand()}
                              firstPos={firstPos}
                              gameOver={GameOver}
                              firstClick={firstClick}
                              value={e.value}
                              isStarted={isStarted}
                              isOpen={e.isOpen}
                              position={[i, j]}
                           />
                        );
                     })}
                  </div>
               );
            })}
         </div>
      );
   };

   return (
      <div
         style={{ position: 'relative', left: '35vw', top: '35vh', width: 35 * col, height: 35 * row, display: 'flex', flexWrap: 'wrap' }}
      >
         <div style={{ position: 'absolute', top: -40 }}>
            <MineCountComponent GameWin={props.GameWin} />
         </div>
         {render()}
      </div>
   );
};
