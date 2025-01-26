function isSolved(board){
    let arr1=board[0];
    let arr2=board[1];
    let arr3=board[2];
    let n=board.map(d=>d.reduce((acc,curr)=>acc*curr,1));

   // if he won on rows:
    if (n.includes(1)) return 1;
    if (n.includes(8)) return 2;
    //if he won on columns:
    for(let i=0;i<3;i++){
        if(arr1[i]===arr2[i]&&arr2[i]===arr3[i]){
            if(arr1[i]===1)return 1;
            else if (arr1[i]===2) return 2; 
             }
        if(arr1[i]===arr2[i+1]&&arr2[i+1]===arr3[i+2]){
            if(arr1[i]===1)return 1;
            else if (arr1[i]===2) return 2; 
        }
        if(arr1[i+2]===arr2[i-1]&&arr2[i-1]===arr3[i]){
            if(arr1[i]===1)return 1;
            else if (arr1[i]===2)return 2; 
        }
        }
    if (board.some(d=>d.includes(0)))return -1;

 return 0;      
}
let eg=[[0,0,2],[0,0,0],[1,0,1]];
let eg2=[[0,0,1],[0,1,2],[2,1,0]]

// let arr=eg.forEach(d=>console.log(d));
// console.log(arr);
console.log(isSolved(eg));


