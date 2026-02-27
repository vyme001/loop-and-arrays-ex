const str = "my-short-string"; //goal: myShortString
/*
remove "-"
capitalize first char in every word != [0]
return a concatenated string

*/
function camelize(str){
    return str.split("-").map((word, index) => index === 0 ? word : word[0].toUpperCase().concat(word.slice(1))).join("");
};

console.log(camelize(str));