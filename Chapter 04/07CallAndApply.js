// Call and apply method

// With the call() method, you can write a method that can be used on different objects.
// The call() method takes arguments separately.


const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);



// The call() Method with Arguments
// The call() method can accept arguments:

const person01 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person10 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person10, "Oslo", "Norway");






// The apply() method accepts arguments in an array:

Example
const person00 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person001 = {
  firstName:"John",
  lastName: "Doe"
}

person00.fullName.apply(person001, ["Oslo", "Norway"]);

// bind

// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

Example
const person000 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person000.fullName.bind(member);