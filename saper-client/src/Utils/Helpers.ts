

export const FieldGenerator = (col:number,row:number,mineNum:number,noMineIndex:number[])=>{
  var arr:number[][]=[];
  var mina = -1;
 for (let i=0; i<row;i++){
        arr[i] = new Array(col).fill(0);
 };
 const rand = (n:number)=>{
    return Math.floor(Math.random()*(n));
}
 const checkMass=(noMineIndex:number[])=>{
    var randRow = rand(row);
     var randCol = rand(col);
    if (arr[randRow][randCol] === mina){
        checkMass(noMineIndex);
    }else if(noMineIndex[0]===randRow && noMineIndex[1] === randCol){
        checkMass(noMineIndex);
    }else arr[randRow][randCol] = mina ;
};
 for (let i = 0 ;i < mineNum; i++){
     checkMass(noMineIndex);
 };

  for (let i =0 ; i<row;i++){
     for(let j = 0 ; j<col;j++){

        if(arr[i][j]!==mina){
            if(i!==0){
                arr[i][j]=arr[i-1][j]===mina?arr[i][j]+1:arr[i][j];   
            }
            if(j!==0){
                arr[i][j]=arr[i][j-1]===mina?arr[i][j]+1:arr[i][j];
            }
            if(i!==row-1){
                arr[i][j]=arr[i+1][j]===mina?arr[i][j]+1:arr[i][j];
            }
            if(j!==col-1){
                arr[i][j]=arr[i][j+1]===mina?arr[i][j]+1:arr[i][j];
            }
            if(j!==0 && i!==row-1){
                arr[i][j]=arr[i+1][j-1]===mina?arr[i][j]+1:arr[i][j];
            }
            if (i!==row-1 && j!==col-1){
                arr[i][j]=arr[i+1][j+1]===mina?arr[i][j]+1:arr[i][j];
            }
            if(i!==0 && j!==0){
                arr[i][j]=arr[i-1][j-1]===mina?arr[i][j]+1:arr[i][j];
            }
            if(i!==0 && j!==col-1){
                arr[i][j]=arr[i-1][j+1]===mina?arr[i][j]+1:arr[i][j];
            }
        }
     }
  }  


 return arr;
}



export const Rand = ()=>{
    const firstPart = (Math.random() * 46656) | 0;
    const secondPart = (Math.random() * 46656) | 0;
    const firstPartStr = ('000' + firstPart.toString(36)).slice(-3);
    const secondPartStr = ('000' + secondPart.toString(36)).slice(-3);
    return firstPartStr + secondPartStr;
}