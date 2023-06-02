let heading = document.querySelector('h1');
console.log(heading);
heading.innerText += " Hello World"
console.log(heading.innerText);


// Getting and Setting Attribute

let coderLink = document.querySelector('a');
console.log(coderLink.getAttribute('href'));


coderLink.setAttribute('href','www.youtube.com');
console.log(coderLink.getAttribute('href'));
coderLink.innerHTML = "Master class of Js"

// Adding the style
heading.style.color = "violet";
heading.style.fontFamily = "Montserrat";

// Add , Remove and Replace class of element 

// Add
heading.classList.add('newClass');

// Remove
heading.classList.remove('main'); 

// Replace
heading.classList.replace('newClass','newClass2');


// Parent, Children and Sibling Element
let parentElem = document.querySelector('.content');
// parent
console.log(parentElem);
console.log(parentElem.children);

// we can not run forEach Method on HTML Collection So
// First convert it into array

console.log(Array.from(parentElem.children));
Array.from(parentElem.children).forEach((e) => {
  e.classList.add("Programmers");
})

// Child Element
let childElement = document.querySelector('h2');
console.log(childElement.parentElement);
// Sibling
console.log(childElement.nextElementSibling);