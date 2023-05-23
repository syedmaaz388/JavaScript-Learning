console.log("Maaz");
console.log('Maaz');

let firstName = "Syed";
let lastName = "Maaz";

console.log(firstName, lastName);
// String Concatination

let fullName = firstName + " "  + lastName;
console.log(fullName);
console.log(firstName + " " + lastName);


// using Template Literals
let bio = `Hii My Name is ${firstName} ${lastName} and I am a front-end developer`;
console.log(bio);


// Getting String Character
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[3]);

// String Methods
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());


// Index of
console.log(firstName.indexOf("m"));


// trim
let hobbies = '     Coding Ready      ';
console.log(hobbies);
let result = hobbies.trim();
console.log(hobbies.trimStart());
console.log(result);


// last index of
console.log(result.lastIndexOf('Ready'));
console.log(result.lastIndexOf('Coding'));
console.log(result.lastIndexOf('go'))

// includes
console.log(result.includes("Ready"));
console.log(result.includes("Coding"));
console.log(result.includes("Hey"));

// Slice
let Text = "Wow Programmer";
console.log(Text.slice(0,5));
console.log(Text.slice(0,3))


//  
'All these methods does not change original value,Strings are Immutable Case Sensitive'
// 


// String to array
let favouriteColors = "Brown Blue Black Gray"
let arrColor = favouriteColors.split(" ");
console.log(arrColor);
console.log(typeof arrColor);

// Strings are Immutable
let str = "Hello";
str[0] = "P"  // Does not change
str = str + " Maaz"
console.log(str);

