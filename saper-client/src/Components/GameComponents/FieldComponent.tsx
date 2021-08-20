import { useState, useEffect } from 'react';

import { FieldGenerator, Rand } from '../../Utils/Helpers';
import { PlayBoxComponent } from './PlayBoxComponent';
import { UseGameContext } from '../../Utils/Context';

export const FieldComponent = (props) => {
   const { col, row, minesNumber } = props;
   const array = new Array<number[]>(row).fill(new Array(col).fill(1));
   const [arr, setArr] = useState(array);
   const [isStarted, setStart] = useState(false);
   const [firstPos, setFirstPos] = useState(new Array<number>());
   const [dead, setDead] = useState(false);
   const { win, setWin } = UseGameContext();

   let i = -1;
   let j = -1;

   // const mineCounter = (f: number) => {
   //    mCount = mCount + f;
   // };
   const gameOver = () => {
      setDead(true);
   };
   const firstClick = (mass: number[]) => {
      setStart(true);
      setFirstPos(mass);
   };
   const minesRender = () => {
      setArr(FieldGenerator(col, row, minesNumber));
   };

   useEffect(() => {
      minesRender();
   }, [isStarted]);
   const render = () => {
      if (dead) {
         return <div style={{ position: 'absolute', left: '13vw', top: '10vh' }}>Помянем!!!</div>;
      }
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
                              gameOver={gameOver}
                              firstPos={firstPos}
                              firstClick={firstClick}
                              value={e}
                              isStarted={isStarted}
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
         <div style={{ position: 'absolute', top: -40 }}>мин осталось: {win}</div>
         {render()}
      </div>
   );
};
