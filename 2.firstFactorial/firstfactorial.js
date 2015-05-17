/*
 * Question
 * 
 *  
*/

function FirstFactorial(num) { 
  
  var numpool = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  var multiply = 1;
  
  for (var i = 0; i < numpool.length; i++){
    if (numpool[i] == num){
      for (var j= i; j>=0; j--){
        multiply = multiply * numpool[j];
        
      }
      
      
    }
    
  }
 
num = multiply;
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());  



// another way to do it
/*
function FirstFactorial(num) { 
  return num<=1?1:num*(FirstFactorial(num-1)); 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
*/




