function User(username,age){
  this.username = username;
  this.age = age;
  this.active = false;

  User.prototype.login = function(){
    console.log('Login');
  }

  User.prototype.degree = "B.tech";

  User.prototype.logout = function(){
    console.log('Logout');
  } 
  
}

function Student(username, age, semester, rank){
  User.call(this, username, age);
  this.semester = semester;
  this.rank = rank;
}
Student.prototype.updateRank = function(newRank){
  this.rank = newRank;
  console.log(this.rank);
}


const studentOne = new Student("Aman",26,8,10);
console.log(studentOne);

studentOne.updateRank(15);
console.log(studentOne);
