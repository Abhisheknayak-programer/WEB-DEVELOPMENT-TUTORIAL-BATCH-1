const image = document.querySelector(".natureImage");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  image.classList.toggle("changedImage");
});
