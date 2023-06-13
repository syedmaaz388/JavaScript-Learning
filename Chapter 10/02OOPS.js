let students = ["Alex","Aman","Maaz"];
console.log(typeof students);



const ages = [12,25,20];
console.log(ages);


const names = new Array("Maaz","Manu","Amish");   // behind the scence this is happening
console.log(names)
console.log(typeof names);


const info = {}
console.log(info);

const info2 = new Object();
console.log(info2);

// Constructor, operator "new"
// The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions and the "new" operator.

// Constructor function
// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.
// For instance:

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false