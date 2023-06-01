// Object/arrays how reference are passed to variable

let arr = [1,2,3,4,5];
// pass by value
let arr2 = [...arr]; // Copy - Using Spread Operator
// pass by reference
let getRef = arr;

getRef[2] = "chai";
console.log(getRef);
console.log(arr);
console.log(arr2);

let obj1 = {
  name:"Maaz",
  age:23
}

let obj2 = {...obj1};
console.log(obj2);