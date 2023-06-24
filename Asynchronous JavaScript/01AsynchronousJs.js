//https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

// Synchronous
// One by One (blocking)
//  - - - > |  

// Asynchronous
// Sath Sath does not depend on other (non- blocking)
//  - |
//  - |
//  - |


// What is Asynchronous and Synchronous in JavaScript?
// Asynchronous vs. Synchronous Programming
// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. 
// Synchronous is a blocking architecture,so the execution of each operation is dependent on the completion of the one before it.


// Synchronous Code
console.log(" I ");
console.log(" Eat ");
console.log(" Ice Cream ");
console.log(" With a ");
console.log(" Spoon ");
// line by line chalega

// Asynchronous Code
console.log(" I ");
console.log(" Eat ");
setTimeout(() => {
  console.log(" Ice Cream ");
},3000)
setTimeout(function(){
  console.log(" With a ")
},2000);
console.log(" Spoon ");
