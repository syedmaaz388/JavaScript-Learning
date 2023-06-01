// this keyword
// "this" keyword represent the object
// Example 
let person = {
  firstName:"Syed",
  lastName:"Maaz",
  city:"Jhansi",
  Education:"B.tech",
  getSummary:function(){
    return `${this.firstName} ${this.lastName} live in ${this.city} and completed his ${this.Education}`;
  }
}

console.log(person.getSummary());

// “This” keyword refers to an object that is executing the current piece of code.
//  It references the object that is executing the current function. 