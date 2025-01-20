function oddSquares(arr){
    return arr.filter(d=>(d%2)!==0).map(d=>d*d)
}
console.log(oddSquares([1, 2, 3, 4, 5, 6]));