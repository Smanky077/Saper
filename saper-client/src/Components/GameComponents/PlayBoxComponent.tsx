import { FunctionComponent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SUB_MINE, ADD_MINE } from '../../Store/Types/Constants';

interface IPlayBoxProps {
   value: number;
   isStarted: boolean;
   isOpen: boolean;
   firstClick: (mass: number[]) => void;
   position: number[];
   firstPos: number[];
   minesCounter?: (f: number) => void;
   gameOver?: () => void;
}

export const PlayBoxComponent: FunctionComponent<IPlayBoxProps> = ({
   value,
   firstClick,
   isStarted,
   position,
   firstPos,
   gameOver,
   isOpen,
}) => {
   const [clicked, setClicked] = useState(false);
   const [rclicked, setRClicked] = useState(false);
   const dispatch = useDispatch();

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
                  dispatch({ type: ADD_MINE });
               }}
               style={{ width: '33px', height: '33px', backgroundColor: 'silver', border: 'solid 1px #fff' }}
            >
               *
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
            onContextMenu={(e) => {
               e.preventDefault();
               setRClicked(true);
               dispatch({ type: SUB_MINE });
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
