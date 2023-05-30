// Break Statement Used to Terminate the Loops
for(let i = 0; i <= 10; i++){
  if(i == 5){
    // console.log(i);
    break;  
  }
  console.log(i);
}

// Continue Statement Jump or skip Some Value
for(let i = 1; i < 10; i++){
  if(i == 5){
    continue;
  }
  console.log("Step" + i)
}