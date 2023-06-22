// 01AsynchronousJavaScript

// What is asynchronous and synchronous in JavaScript?
//  Asynchronous vs. Synchronous Programming
// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another.Tasks can run simultaneously. 
// Synchronous is a blocking architecture, So the execution of each operation is dependent on the completion of the one before it.



console.log('A');
console.log('B');
console.log('C');

// Default behaviour hai JavaScript Ka synchronously work karna but we make it Asynchronous.


// Callback function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

var talk = function(fr){
  fr()
}
var sayHi = function(){
  console.log("Hiii");
}
talk(sayHi);


function calculation(fx,a,b){
  return fx(a,b);
}
function sum(x,y){
  return x + y;
}
console.log(calculation(sum,10,10));




function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "Maaz";
  callback(name);
}

processUserInput(greeting);


