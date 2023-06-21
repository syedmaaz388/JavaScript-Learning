class User{
  constructor(first,last){
    this.first = first;
    this.last = last;
  }
  get fullName(){
    return `${this.first} ${this.last}`;
  }
  set fullName(newValue){
    const [first,last] = newValue.split(" ");
    this.first = first;
    this.last = last;
  }
}
const guest = new User("Syed","Maaz");
console.log(guest.first);
console.log(guest.last);
console.log(guest.fullName);

guest.first = "Manu";
console.log(guest.first);


// get - to define a getter method to get the property value
// set - to define a setter method to set the property value