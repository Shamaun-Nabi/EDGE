const myHtml = document.getElementById("htmlTag");
console.log(myHtml);

const Darkbtn = document.getElementById("Darkbtn");
console.log(Darkbtn);

Darkbtn.addEventListener("click", function () {
  console.log("hello");
  myHtml.classList.toggle("dark");
});
    