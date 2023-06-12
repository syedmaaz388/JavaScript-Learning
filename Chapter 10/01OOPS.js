// Old Way 
// Object 01 
// const user1 = {
//   name:"Maaz",
//   birthday:"24/05/1999",
//   gender:"Male",
//   age:function (){
//     return Date.now() - this.birthday;
//   },
// }
// Object 02
// const user2 = {
//   name:"Manu",
//   birthday:"24/05/1999",
//   gender:"Male",
//   age:function (){
//     return Date.now() - this.birthday;
//   },
// }

// After OOPS 

class User{
  constructor(name,birthday,gender){
   this.name = name;
   this.birthday = birthday;
   this.gender = gender;
  }
  calcAge(){
    return Date.now() - this.birthday;
  }
}

// Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box. OOP was developed to make code more flexible and easier to maintain.
 
const user1 = new User("Alex", "14/07/1997","Male");
const user2 = new User("Maaz", "24/05/1999","Male");

