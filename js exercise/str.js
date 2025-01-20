function vert(str){
    str=str.split('\n');
    // return str.map(w=>w.reverse()).join('\n');
    for(let i=0;i<=str.length;i++){
        // console.log(str[i]);
        str[i]
        str[i]=str[i].reverse();
        // str[i]=str[i].split('');
        // str[i]=str[i].reverse();
        // str[i]=str[i].join('');
    }
    console.log(str);

}
console.log(vert('dcba\nhgfe\nlkji\nponm'))