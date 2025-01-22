function add(x, y)
{
  // let counter=0;
  // for(let i=0;i<x;i++){
  //   counter++;
  // }
  // for(let i=0;i<y;i++){
  //   counter++;
  // }
  // console.log(counter);
  if(y>=0){
    while(y>0){
      x++;
      y--;
    }
}
else
while(y<0){
  x--;
  y++;
}
return x;}
console.log(add(-2,-2));