import { useState } from 'react';

import { Game } from '../Pages/Game';

export const Start = () => {
   const [start, setStart] = useState(false);
   const [option, setOption] = useState(false);
   const Route = () => {
      if (start) {
         return <Game col={15} row={6} minesNumber={20} />;
      }
      if (option) {
         return <div>Option</div>;
      }
      return (
         <div style={{ position: 'relative', top: '30vh', left: '45vw' }}>
            <div onClick={() => setStart(!start)} style={{ cursor: 'pointer' }}>
               Start
            </div>
            <div onClick={() => setOption(!option)} style={{ cursor: 'pointer' }}>
               Options
            </div>
            <p style={{ cursor: 'unset' }}>Copirite: Novoseltsevse</p>
         </div>
      );
   };

   return <div>{Route()}</div>;
};
