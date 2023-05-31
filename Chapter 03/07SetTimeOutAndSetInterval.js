// SetTimeOut - Run function "once" after "Interval" of time

function greeting(){
  console.log("Hello Maaz");
}

setTimeout(greeting, 3000);

setTimeout(function greeting(){
  console.log("Welcome Maaz");
},3000)

// SetInterval - Run function repeatedly, Starting after the interval of time the repeating....

// setInterval(greeting,1000);