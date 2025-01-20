function convertNullableValues(obj){
    let copy={...obj};
    for(let key in obj){
      if(copy[key]===null)  copy[key]=0;
      if(copy[key]===undefined) copy[key]='';
    }
    return copy;
}
console.log(convertNullableValues({izina:null,age:undefined,talent:'none'}));