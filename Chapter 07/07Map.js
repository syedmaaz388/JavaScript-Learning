let salaries = [3000,5000,6000,8000,9000];

let newSalaries = salaries.map(salary => {
  let incrementAmount = salary/2;
  return salary + incrementAmount
})

console.log(newSalaries);

console.log(salaries);