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
console.log(pinkText);
promptBtn.addEventListener("click", () => {
  const color = prompt("Enter your color :");
  for (const element of pinkBg) {
    element.style.backgroundColor = color;
  }
  for (const text of pinkText) {
    text.style.color = color;
  }
  promptBtn.style.backgroundColor = color;
  firstName.innerText = prompt("Enter your name :");
  firstName.style.color = "white";
});
