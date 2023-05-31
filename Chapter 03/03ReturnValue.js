// The return statement ends function execution and specific value to be retrned to the function Caller.

let ageCalculation = function(birthyear){
  let age = 2023 - birthyear;
  return age;
}

console.log(ageCalculation(2000));


let ageCalu = ageCalculation(2004);
console.log(ageCalu);