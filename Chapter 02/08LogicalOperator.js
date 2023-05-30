let a = true;
let b  = true;


// And - &&   ---Both needs to be true
// OR - ||    ---At Least one need to be true
// not - !    ---vice versa

if(a && b){
  console.log("Both needs to be true");
}else if(a || b){
  console.log("At Least one need to be true");
}

console.log(!false);
