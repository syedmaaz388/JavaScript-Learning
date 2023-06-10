// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

let ages = [21,18,19,17,23];
let result = ages.findIndex(age => {
  return age > 15;
})
console.log(result);