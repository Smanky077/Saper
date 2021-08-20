import { FunctionComponent, useState, useEffect } from 'react';

interface IPlayBoxProps {
   value: number;
   isStarted: boolean;
   firstClick: (mass: number[]) => void;
   position: number[];
   firstPos: number[];
   gameOver?: () => void;
}

export const PlayBoxComponent: FunctionComponent<IPlayBoxProps> = ({ value, firstClick, isStarted, position, gameOver, firstPos }) => {
   const [clicked, setClicked] = useState(false);
   const [rclicked, setRClicked] = useState(false);
   const render = () => {
      if (clicked && value === -1) {
         gameOver && gameOver();
      }
      if (clicked) {
         return (
            <div style={{ width: '33px', height: '33px', backgroundColor: 'gray', border: 'solid 1px #fff' }}>
               {value === 0 ? '' : value}
            </div>
         );
      }
      if (rclicked) {
         return (
            <div
               onContextMenu={(e) => {
                  e.preventDefault();
                  setRClicked(false);
               }}
               style={{ width: '33px', height: '33px', backgroundColor: 'silver', border: 'solid 1px #fff' }}
            >
               *
            </div>
         );
      }
      return (
         <div
            id="rClick"
            onClick={() => {
               if (!isStarted) {
                  firstClick(position);
               }
               setClicked(true);
            }}
            onContextMenu={(e) => {
               e.preventDefault();
               setRClicked(true);
            }}
            style={{ width: '33px', height: '33px', backgroundColor: 'silver', border: 'solid 1px #fff' }}
         ></div>
      );
   };

   useEffect(() => {
      if (position[0] === firstPos[0] && position[1] === firstPos[1]) {
         setClicked(true);
      }
   }, []);

   return <div>{render()}</div>;
};
