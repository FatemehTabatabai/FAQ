import "./style.css";

const div1El = document.getElementById("div1");
const p1El = document.getElementById("p1");
const icon1El = document.getElementById("icon1");


const div2El = document.getElementById("div2");
const p1E2 = document.getElementById("p2");
const icon2El = document.getElementById("icon2");

const div3El = document.getElementById("div3");
const p1E3 = document.getElementById("p3");
const icon3El = document.getElementById("icon3");

const div4El = document.getElementById("div4");
const p1E4 = document.getElementById("p4");
const icon4El = document.getElementById("icon4");

const div5El = document.getElementById("div5");
const p1E5 = document.getElementById("p5");
const icon5El = document.getElementById("icon5");

const div6El = document.getElementById("div6");
const p1E6 = document.getElementById("p6");
const icon6El = document.getElementById("icon6");

const div7El = document.getElementById("div7");
const p1E7 = document.getElementById("p7");
const icon7El = document.getElementById("icon7");

div1El.addEventListener("click", () => {
  div1El.classList.toggle("active");
  icon1El.classList.toggle("rotate-45");
});

div2El.addEventListener("click", () => {
  div2El.classList.toggle("active");
  icon2El.classList.toggle("rotate-45");
});

div3El.addEventListener("click", () => {
  div3El.classList.toggle("active");
  icon3El.classList.toggle("rotate-45");
});

div4El.addEventListener("click", () => {
  div4El.classList.toggle("active");
  icon4El.classList.toggle("rotate-45");
});

div5El.addEventListener("click", () => {
  div5El.classList.toggle("active");
  icon5El.classList.toggle("rotate-45");
});

div6El.addEventListener("click", () => {
  div6El.classList.toggle("active");
  icon6El.classList.toggle("rotate-45");
});

div7El.addEventListener("click", () => {
  div7El.classList.toggle("active");
  icon7El.classList.toggle("rotate-45");
});