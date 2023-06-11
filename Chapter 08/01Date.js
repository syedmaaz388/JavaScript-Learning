// Date and Time
// Date Object always Carry Both "Date" and "Time"
// Using Date Method


let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getTime());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());


// let Shaadi Date
// new Date(year, month, date, hours, minutes, seconds, ms)

let Date11 = new Date("2022-10-11");
console.log(Date11);

let DaysCompleted = currentDate - Date11;
console.log(DaysCompleted);
let minutes = 1000 * 60;
let hours = minutes * 60;
const day = hours * 24;
const year = day * 365;
console.log(Math.round(DaysCompleted/minutes));
console.log(Math.round(DaysCompleted/hours));
console.log(Math.round(DaysCompleted/day)); 


