class User{
  constructor(username,age){
    this.username = username;
    this.age = age;
    this.active = false;
  }
  login(){
    this.active = true;
    console.log(`Welcome ${this.username} - ${this.active}`);
  }
  logout(){
    this.active = false;
    console.log(`Logout ${this.username} - ${this.active}`);
  }
  display(){
    if(this.active){
    console.log(`Username - ${this.username} , Age: ${this.age}`);
    }else{
      console.log('Please login first');
    }
  }
  
}

const UserOne = new User("Maaz",22);
console.log(UserOne);
UserOne.login();
UserOne.display();
// class Student extends User{

// }

// const studentOne = new Student("Maaz",23);
// console.log(studentOne);
// studentOne.login();

class Student extends User{
   constructor(username,age,semester,rank){
    super(username,age);
    this.semester = semester;
    this.rank = rank;
   }
   updateRank(newRANK){
    this.rank = newRANK;
    console.log(this.rank);
   }
   display(){
    if(this.active){
    console.log(`Username - ${this.username} , Age: ${this.age} Semester-${this.semester} rank - ${this.rank} `);
    }else{
      console.log('Please login first');
    }
  }
} 



const studentOne = new Student("Maaz",60,5,10);
// console.log(studentOne);
console.log(studentOne.rank);
studentOne.updateRank(15);
console.log(studentOne)
studentOne.login();
studentOne.display();

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

