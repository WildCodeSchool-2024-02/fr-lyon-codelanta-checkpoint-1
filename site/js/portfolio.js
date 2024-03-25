const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
  if (avatar.src.endsWith("avatar.svg")) {
    avatar.src = "image/avatar-bis.png";
  } else {
    avatar.src = "image/avatar.svg";
  }
});

const promptBtn = document.querySelector("#promptBtn");
const firstName = document.querySelector("#firstname");
const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");
const links = document.querySelectorAll("a");

console.log(links);

promptBtn.addEventListener("click", () => {
  const color = prompt("Enter your color :");
  for (const element of pinkBg) {
    element.style.backgroundColor = color;
  }
  for (const text of pinkText) {
    text.style.color = color;
  }
  for (const link of links) {
    link.style.color = color;
  }
  firstName.innerText = prompt("Enter your name :");
  firstName.style.color = "white";
});

const modifyBtn = document.querySelector("#modifyBtn");
const ul = document.querySelector("#front-dev-tools");
const li = ul.querySelectorAll("li");

modifyBtn.addEventListener("click", () => {
  li[0].innerText = "VSCode";
  li[1].innerText = "Github";
  li[2].innerText = "Terminal";
});

const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const dynamicUl = document.querySelector("#dynamicUl");

addBtn.addEventListener("click", () => {
  const newli = document.createElement("li");
  newli.innerText = input.value;
  input.value = "";
  dynamicUl.appendChild(newli);
});
