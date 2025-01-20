function password(str){
    if (str.length<8) return false;
    const lower=/[a-z]/.test(str);
    console.log(lower);
    const upper=/[A-Z]/.test(str);
    console.log(upper);
    const dig=/\d/.test(str);
    console.log(dig);
    return upper&&lower&&dig;
  }
  console.log(password("aBcd1234"));