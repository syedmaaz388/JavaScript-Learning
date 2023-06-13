const userOne = {
  userName:"Syed",
  fullname:"Syed Maaz",
  email:"syed.maaz@gmail.com",
  age:23,
  login(){
    console.log("Login");
  },logout(){
    console.log("Logout");
  }
};

console.log(userOne.age);
console.log(userOne.email);
userOne.login();
userOne.logout();
// These above things is not best practice for bigs projects So We USE OOPs
