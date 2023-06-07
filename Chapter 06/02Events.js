// Copy Event

let copyRightElement = document.querySelector('.copy');
copyRightElement.addEventListener('copy',() => {
   console.log("Dont Copy");
   alert("dont copy");
})

// mouse move event
let box = document.querySelector('.box');
box.addEventListener("mousemove", (e) => {
  console.log(e.offsetX, e.offsetY);
})