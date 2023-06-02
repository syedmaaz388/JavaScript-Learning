// What is a DOM in JavaScript?
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// Browser Create Object of html Called "Document Object".


// console.log(document)
// console.log(document.URL);


// Get html element
// let heading = document.querySelector('h1');
// console.log(heading);
let resultedElement = document.querySelectorAll('p');
console.log(resultedElement);
resultedElement.forEach((e) => {
  console.log(e);
})

// Select Class
let Myclass = document.querySelector('.coder');
console.log(Myclass);
console.log(Myclass.innerHTML);
console.log(Myclass.innerText);


// Select Id
let MyId = document.querySelector('#coder2');
console.log(MyId);
console.log(MyId.innerHTML);
console.log(MyId.innerText);
