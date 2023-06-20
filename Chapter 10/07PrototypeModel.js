function User(username,age){
  this.username = username;
  this.age = age;
  this.active = false;

  User.prototype.login = function(){
    console.log('Login')
  }
  User.prototype.degree = "B.tech";

  User.prototype.logout = function(){
    console.log('Logout')
  }

}

const UserOne = new User("Maaz", 23);
console.log(UserOne);
UserOne.login();
console.log(UserOne.degree);