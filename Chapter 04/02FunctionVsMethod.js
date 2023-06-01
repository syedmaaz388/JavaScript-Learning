function SayHello(){
  console.log("This is a function");
}
SayHello();


let name = "maaz";
console.log(name.toUpperCase());  // This is method

// or

let person = {
  ageCalculate : function(birthyear){
    let age = 2023 - birthyear;
    return age;
  }
}
console.log(`Current age is ${person.ageCalculate(2000)}`); // This is also method