function great(a,b){
    let min=Math.min(a,b);
    let arr=[];
    // let newA,newB;
    for(let i=2;i<min;i++){
        if(a%i===0&&b%i===0){
            a=a/i;
            b=b/i;
            arr.push(i);
        }
    }
    console.log(arr);
    let gcd=arr.reduce((acc,curr)=>acc*curr,1);
    return gcd;
}
console.log(great(24,18));