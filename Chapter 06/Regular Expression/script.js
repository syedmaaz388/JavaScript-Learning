// Regular Expression (Regex)

// It is a pattern of characters used to do pattern matching
// Or we can say for "Data Validation"

// User Validation
// Username can only consist of A-Z or a-z
// Length of username between 6 to 12

// Length At Least = 8
// At Least Contain One Upper Case Letter
// At Least Contain One Lower Case Letter
// At Least Contain One Digit 0 to 9


let form = document.querySelector(".signup");
let user = document.querySelector("#UserName");
let password = document.querySelector("#Password");
let userNamePattern = /^[A-Za-z]{6,12}$/
let PasswordPattern = /^[A-Za-z]{6,12}$/
// User Validation
user.addEventListener('keyup', (e) => {
  if(userNamePattern.test(user.value)){
    user.setAttribute('class','work');
  }else{
    user.setAttribute('class','notwork')
  }
})


password.addEventListener('keyup', (e) => {
  if(PasswordPattern.test(password.value)){
    password.setAttribute('class','work');
  }else{
   password.setAttribute('class','notwork')
  }
})

