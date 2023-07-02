// A callback is a function passed as an argument to another function. 
// This technique allows a function to call another function.
//  A callback function can run after another function has finished.

// Example - 1
function one(callback){
  callback();
  console.log(" Step One ");
}
function two(){
console.log(" Step Two ");
}
one(two);


// Example - 2
let order = (call_production) => {
  console.log("Order Placed, Please call Production");
  call_production();
}
let Production = () => {
  console.log("Order Received, Starting Production");
}
order(Production);