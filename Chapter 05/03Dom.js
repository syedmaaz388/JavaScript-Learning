// let eventElement = document.querySelector('.clickMe');
// eventElement.addEventListener('click',(e) => {
//   console.log("Some One Click Me");
// })


// creating
// const ul = document.querySelector('ul');
// let button = document.querySelector('.clickMe')
// button.addEventListener('click', (elems) => {
//   let li = document.createElement('li');
//   li.textContent = "Something New"
//   ul.append(li)
// })

// elements.forEach((elem) => {
//   elem.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.style.textDecoration = "line-through";
//   })
// })

// Create and Remove element
// const element = document.querySelectorAll('li');

// element.forEach((elem) => {
//   elem.addEventListener('click', (e) => {
//      e.target.remove();
//   })
// })

// Event Bubbling And Delegation
// Event Bubbling is a concept in the DOM (Document Object Model).
// It happens when an element receives an event, 
// and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor 
// elements in the DOM tree until it gets to the root element.


// Event delegation in JavaScript is a pattern that
//  efficiently handles events. Events can be added 
// to a parent element instead of adding to every single 
// element. It refers to the process of using event 
// propagation (bubbling) to handle events at a higher level 
// in the DOM than the element on which the event originated.

const ul = document.querySelector('ul');
ul.addEventListener("click", (e) => {
  if(e.target.nodeName == "LI"){
    e.target.remove()
  }
})

let button = document.querySelector('.clickMe')
button.addEventListener('click', (elems) => {
  let li = document.createElement('li');
  li.textContent = "Something New"
  ul.append(li)
})