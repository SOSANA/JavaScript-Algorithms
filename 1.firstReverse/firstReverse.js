/*
 * Question
 * 
 * For this challenge you will be reversing a string.
 * 
 * Using the JavaScript language, have the function FirstReverse(str) take the str parameter being 
 * passed and return the string in reversed order. 
*/

function FirstReverse(str) { 
  
  var ns = str.split("").reverse().join("");
  // code goes here  
  return ns; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());

