// SELECT A CLASS OR ID OR TAG
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

// EVENT LISTENERS
btn.addEventListener("click", function () {
  box.classList.toggle("box");
});

// toggle => On and Off Classes
// Add => Add the classes
// Remove => Remove the classes

// HOMEWORK
// 1. Add Two Different Box and 2 Buttons having different events
