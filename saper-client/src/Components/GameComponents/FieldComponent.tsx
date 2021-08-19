import { useState, useEffect } from 'react';

import { FieldGenerator, Rand } from '../../Utils/Helpers';
import { PlayBoxComponent } from './PlayBoxComponent';

export const FieldComponent = (props) => {
   const { col, row, minesNumber } = props;
   const array = new Array<number[]>(row).fill(new Array(col).fill(1));
   const [arr, setArr] = useState(array);
   const [isStarted, setStart] = useState(false);
   const [firstPos, setFirstPos] = useState(new Array<number>());
   let i = -1;
   let j = -1;

   const firstClick = (mass: number[]) => {
      setStart(true);
      setFirstPos(mass);
   };
   const minesRender = () => {
      setArr(FieldGenerator(col, row, minesNumber));
   };

   useEffect(() => {
      if (isStarted) {
         minesRender();
      }
   }, [isStarted]);

   console.log(arr, firstPos);

   return (
      <div
         style={{ position: 'relative', left: '35vw', top: '35vh', width: 35 * col, height: 35 * row, display: 'flex', flexWrap: 'wrap' }}
      >
         {arr.map((e) => {
            i++;
            j = -1;
            return (
               <div key={Rand()} style={{ display: 'flex' }}>
                  {e.map((e) => {
                     j++;
                     return <PlayBoxComponent key={Rand()} firstClick={firstClick} value={e} isStarted={isStarted} position={[i, j]} />;
                  })}
               </div>
            );
         })}
      </div>
   );
};
//<div onClick={firstClick} style={{ width: '33px', height: '33px', backgroundColor: 'silver', border: 'solid 1px #fff' }}></div>
