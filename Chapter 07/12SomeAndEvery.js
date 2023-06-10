// The every() array method in JavaScript is used to check if all the elements of the array satisfy the callback function condition or not. 
// The some() array method in JavaScript is used to check if at least one of the elements passes the callback test or not.


let scores = [25,4,67,65,88,92];
let result = scores.some(score => {
  return score > 50;
})

console.log(result);

let scores01 = [25,4,67,65,88,92];
let result01 = scores01.every(score01 => {
  return score01 > 50;
})

console.log(result01);