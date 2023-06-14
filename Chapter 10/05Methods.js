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
    console.log(`Username - ${this.username} , Age: ${this.age}`);
  }
}

const userOne = new User("Maaz",23);
console.log(userOne);
userOne.login();
userOne.logout();
userOne.display();

const userTwo = new User("Aman",25);
console.log(userTwo);
