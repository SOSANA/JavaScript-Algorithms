/*
 * Question
 * 
 * For this challenge you will be reversing a string.
 * 
 * Using the JavaScript language, have the function FirstReverse(str) take the str parameter being 
 * passed and return the string in reversed order. 
*/

// for testing locally
function FirstReverse(str) { 
    // code goes here
    var str = "!!rekoJ eht ma I";
    var ns = str.split("").reverse().join("");
    return ns;          
}
   
console.log(FirstReverse());

