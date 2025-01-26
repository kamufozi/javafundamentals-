function pairZeros(arr) {
    // your code here
      for (let i=0;i<arr.length;i++){
          
          if(arr[i]===0){
          for (let j=i+1;j<arr.length;j++){
              if (arr[j]===0){
                  arr.splice(j,1)
                //   let sentence=`I was removed due to index ${i}`;
                //   console.log(sentence);
                  break;
          }
  
          }
              
      }
  }
      return arr;
  }
  console.log(pairZeros([1,0,1,0,2,0,0,3,0]))