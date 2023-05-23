let dishes = ['Biryani','Chat','Juice','Kher'];
console.log(dishes);

// Access
console.log(dishes[0]);
console.log(dishes[1]);
console.log(dishes[2]);
console.log(dishes[3]);

// Modify
dishes[3] = "Ice-Cream";
console.log(dishes);

// Join Method
console.log(dishes.join("---"));  // But Now it converted to String
let ans = dishes.join("-");
console.log(typeof ans);


// Index of
console.log(dishes.indexOf("Chat"));
console.log(dishes.indexOf("Dosa"));


// Concat
let newDishes = ["Maggie","Gol Gappa","fruit-chat"];
console.log(dishes.concat(newDishes));

let update = dishes.concat(newDishes);
console.log(update);

// Length Property
console.log(newDishes.length);


// push method
update.push("Chole Bhature");
update.push("Butter Panner");
update.push("Dal Makhni");
console.log(update);


// pop method
update.pop();
update.pop();
console.log(update);