// 02SetTimeout


// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.


// Syntax -  setTimeout(function, milliseconds);


function greet() {
  console.log('Hello world');
}

setTimeout(greet, 3000);

// or

setTimeout(() => (console.log("Hi")), 2000);