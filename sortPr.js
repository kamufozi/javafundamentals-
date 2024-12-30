function sortProducts(arr){
    return arr.sort((a,b)=>a.price-b.price);
}
console.log(sortProducts([{izina:'cj',price:22},{izina:'kenzi',price:11}]))