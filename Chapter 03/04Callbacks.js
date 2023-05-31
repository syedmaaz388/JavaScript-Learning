// Passing function as an argument(Higher Order Function example)

let upperCase = function(str){
  return str.toUpperCase();
}

let LowerCase = function(str){
  return str.toLowerCase();
}

let transformer = function(str,fun){
  return fun(str);
}

console.log(transformer("Hello",upperCase));
console.log(transformer('Maaz',LowerCase));