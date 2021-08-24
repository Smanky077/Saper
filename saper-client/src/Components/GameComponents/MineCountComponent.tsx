//import { useState, useEffect } from 'react';

interface IMineCountComponent {
   mines: number;
}

export const MineCountComponent = (props: IMineCountComponent) => {
   return <div>Мин осталось:{props.mines}</div>;
};
