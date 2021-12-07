
////رمز نگاری پیام ها با حروف کوچک انگلیسی
//https://quera.ir/problemset/106796/

function cryptoString(n, k, string){
    for (let i = 1; i <= k; i++){
        let newStr = end2start(n, string);
        string = nextLetter(n, newStr);
    }
    return string;
}

function end2start(m, string){
    let str = string.toString();
    let newStr = str[m-1]+ str.substring(0,m-1);
    return newStr;
}
function nextLetter(m, string) {
    let newStr = '';
    let str = string.toString();
    for (let i = 0; i < m; i++){
        if (str[i] === 'z') {
            newStr += 'a';
        }
        else {
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return newStr;
}

console.log(cryptoString(4,1,'abzd'))