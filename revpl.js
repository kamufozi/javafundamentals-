function reverse(str){
    str=str.split(' ');
    for(let i=0;i<str.length;i++){
        // console.log(str[i]);
        str[i]=str[i].split('');
        str[i]=str[i].reverse();
        str[i]=str[i].join('');
        // console.log(str[i]);
    }
    str=str.join(' ');
    return str;
}
console.log(reverse("I am the good boy"));