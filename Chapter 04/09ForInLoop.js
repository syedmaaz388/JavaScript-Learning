// for in Loop - Use in Object

let car = {
  model:2023,
  color:"Black",
  company:"Toyota"
}
for(let key in car){
  console.log(key);
}

let x = ""
for(let key in car){
  x = x + car[key];
  
}
console.log(x);

for(let i in car){
  console.log(car[i]);
}