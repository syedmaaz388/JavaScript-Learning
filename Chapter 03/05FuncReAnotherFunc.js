let compliment = function(msg){
  return function(name){
    console.log(`${msg} ${name}`);
  }
};

compliment('You are good coder')('Maaz');