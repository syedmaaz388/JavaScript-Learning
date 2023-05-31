let invitation = function(name,age){   // parameters
  console.log(`Hi ${name} you are ${age} now`);
}
invitation("Maaz",23); //arguments



// default Value

let greet = function(name = "Aman"){
  console.log(`Hello ` + name);
}
greet();
greet("Manu");