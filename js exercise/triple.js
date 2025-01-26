function tripledouble(num1, num2) {
    //code me
    num1=num1.toString().split('');
    num2=num2.toString().split('');
    let resolve,resolve1;
    for(let i=0; i<num1.length; i++){
        if(num1[i]===num1[i+1]&&num1[i+1]===num1[i+2]){
            resolve=true;
        }
        else i=i+3;
    }
    for(let i=0; i<num2.length; i++){
        if(num2[i]===num2[i+1]){
             resolve1=true;
             console.log('really');
        }
        else i=i+2;
    }
    if(resolve===resolve1) return true;
    else return 0;
  }
  console.log(tripledouble(1222345, 12345))