let numbers = [2,3,4,5,6,7,8,9];

let evenNumbers = numbers.filter(num => {
  if(num % 2 == 0){
    return numbers;
  }
})
console.log(evenNumbers);