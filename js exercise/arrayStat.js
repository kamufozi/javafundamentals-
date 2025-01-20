function arrayStats(arr){
    obj={};
    obj.sum= arr.reduce((acc,curr)=>acc+curr,0);
    obj.average= obj.sum/arr.length;
    obj.min=Math.min(...arr);
    obj.max=Math.max(...arr);
    // console.log(...arr)
    return obj;
}
console.log(arrayStats([2,4,7,9,5,3]))