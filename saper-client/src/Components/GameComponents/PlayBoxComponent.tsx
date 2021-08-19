import { FunctionComponent, useState } from 'react';

interface IPlayBoxProps {
   value: number;
   isStarted: boolean;
   firstClick: (mass: number[]) => void;
   position: number[];
}

export const PlayBoxComponent: FunctionComponent<IPlayBoxProps> = ({ value, firstClick, isStarted, position }) => {
   const [clicked, setClicked] = useState(false);

   const render = () => {
      if (clicked) {
         return (
            <div style={{ width: '33px', height: '33px', backgroundColor: 'gray', border: 'solid 1px #fff' }}>
               {value === 0 ? '' : value}
            </div>
         );
      }
      return (
         <div
            onClick={() => {
               if (!isStarted) {
                  firstClick(position);
               }
               setClicked(true);
            }}
            style={{ width: '33px', height: '33px', backgroundColor: 'silver', border: 'solid 1px #fff' }}
         ></div>
      );
   };
   return <div>{render()}</div>;
};
