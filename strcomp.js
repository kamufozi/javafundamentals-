function compressString(str) {
    let result = "";
    let count = 0;
    let currentChar = str[0];
    for (let char of str) {
        if (char === currentChar) {
            count++;
        } else {
            result += currentChar + count;
            count = 1;
            currentChar = char;
        }
    }
    result += currentChar + count;
    return result;
}
console.log(compressString('AAAABBBCCDAA'))