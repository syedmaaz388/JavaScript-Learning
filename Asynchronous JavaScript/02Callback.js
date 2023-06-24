// 02Callback
// A callback is a function passed as an argument to another function.

function one(Callback){
  console.log("Step 1");
  Callback();
}
function two(){
   console.log("Step 2");
}

one(two);



// Write a Program take order from Customer and then start production Using Callback

let Order = (call_Production) => {
  console.log("Order Placed!");
  call_Production();
}
let Production = () => {
  console.log("Start Production");
}
Order(Production);

