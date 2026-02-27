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


// ex-2

const arr = [2, 3, 1, 0, 54, 2];
const arr2 = [5, 3, 8, 1];

/*
receives an array
looks for an element >= a && <= b
returns a result as an array
*/

function filterRange(arr, a, b){
    return arr.filter((item)=> item >= a && item <= b)
};

console.log(filterRange(arr, 2, 7));
console.log(filterRange(arr2, 1, 4));